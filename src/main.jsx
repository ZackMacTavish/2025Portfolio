import React from 'react'             // <-- add this line
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Remove the prerender flash guard (see index.html) once React has rendered
// and styled-components has had a chance to inject its runtime CSS. We wait
// two animation frames so the IntroAnimation overlay is painted before the
// white cover disappears — otherwise there would be a 1-frame gap where the
// unstyled prerendered DOM is visible.
if (typeof window !== 'undefined' && document.documentElement.classList.contains('app-hydrating')) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('app-hydrating');
    });
  });
}