// Image-decode gate for the case-study card transition.
//
// Extracted from `CaseStudyTransition.tsx` so consumers can decide whether
// to run the transition (and lazy-load the framer-motion-heavy component)
// without paying the cost of importing the animation code up front.

export type TransitionImage = { src: string; alt: string; objectPosition?: string };

const decodedImageCache = new Set<string>();

export function areTransitionImagesDecoded(images: TransitionImage[]): boolean {
  return images.every((image) => decodedImageCache.has(image.src));
}
const imagePreloadPromises = new Map<string, Promise<boolean>>();
export const CARD_TRANSITION_DECODE_GATE_MS = 1400;
let cardTransitionsLockedOffForSession = false;
const MAX_TRANSITION_IMAGE_RETRIES = 1;

function isLocalDevelopmentHost() {
  if (typeof window === "undefined") {
    return false;
  }

  return ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
}

function loadAndDecodeImage(src: string, attempt = 0): Promise<boolean> {
  if (decodedImageCache.has(src)) {
    return Promise.resolve(true);
  }

  const existingPromise = attempt === 0 ? imagePreloadPromises.get(src) : undefined;
  if (existingPromise) {
    return existingPromise;
  }

  const preloadPromise = new Promise<boolean>((resolve) => {
    const img = new Image();
    img.decoding = "async";
    let finalized = false;

    const finalize = (didDecode: boolean) => {
      if (finalized) return;
      finalized = true;

      if (didDecode) {
        decodedImageCache.add(src);
      }

      if (attempt === 0) {
        imagePreloadPromises.delete(src);
      }

      resolve(didDecode);
    };

    img.onload = async () => {
      if (typeof img.decode === "function") {
        try {
          await img.decode();
        } catch {
          finalize(false);
          return;
        }
      }
      finalize(true);
    };

    img.onerror = () => {
      if (attempt < MAX_TRANSITION_IMAGE_RETRIES) {
        void loadAndDecodeImage(src, attempt + 1).then(finalize);
        return;
      }

      finalize(false);
    };

    img.src = src;

    if (img.complete) {
      void Promise.resolve().then(async () => {
        if (typeof img.decode === "function") {
          try {
            await img.decode();
          } catch {
            finalize(false);
            return;
          }
        }
        finalize(true);
      });
    }
  });

  if (attempt === 0) {
    imagePreloadPromises.set(src, preloadPromise);
  }

  return preloadPromise;
}

/**
 * Non-blocking warm preload: start loading images in the background. Used for
 * hover/app-start warmup so the transition is already decoded by the time the
 * user clicks, without blocking the current UI.
 */
export function warmPreloadTransitionImages(images: TransitionImage[]): Promise<void> {
  const imagePromises = images.map((image) => loadAndDecodeImage(image.src));
  Promise.all(imagePromises).catch(() => {});
  return Promise.resolve();
}

/**
 * Blocking preload: wait for all images to be ready. Only used when you need
 * guaranteed ready state (rare).
 */
export async function preloadTransitionImages(images: TransitionImage[]) {
  const imagePromises = images.map((image) => loadAndDecodeImage(image.src));
  const preloadResults = await Promise.all(imagePromises);
  return preloadResults.every(Boolean);
}

export async function measureTransitionDecodeDuration(
  images: TransitionImage[]
): Promise<{ duration: number; allDecoded: boolean }> {
  const startedAt = performance.now();
  const allDecoded = await preloadTransitionImages(images);
  return { duration: performance.now() - startedAt, allDecoded };
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export async function shouldRunCardTransition(
  images: TransitionImage[],
  thresholdMs = CARD_TRANSITION_DECODE_GATE_MS,
  options?: { lockSessionOnFailure?: boolean }
): Promise<boolean> {
  if (typeof window === "undefined") {
    return true;
  }

  // Honor OS / browser / extension reduced-motion preference: never run the
  // card-fan (intro or case-study) when the user has asked for less motion.
  if (prefersReducedMotion()) {
    return false;
  }

  const lockSessionOnFailure = options?.lockSessionOnFailure ?? true;

  if (isLocalDevelopmentHost()) {
    const { allDecoded } = await measureTransitionDecodeDuration(images);
    return allDecoded;
  }

  if (lockSessionOnFailure && cardTransitionsLockedOffForSession) {
    return false;
  }

  const decodeDurationPromise = measureTransitionDecodeDuration(images);
  const timeoutPromise = new Promise<boolean>((resolve) => {
    window.setTimeout(() => resolve(false), thresholdMs);
  });

  const shouldAnimate = await Promise.race([
    decodeDurationPromise.then(
      ({ duration, allDecoded }) => allDecoded && duration <= thresholdMs
    ),
    timeoutPromise,
  ]);

  if (!shouldAnimate && lockSessionOnFailure) {
    cardTransitionsLockedOffForSession = true;
  }

  return shouldAnimate;
}
