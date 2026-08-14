import Cocoa
import PDFKit

let pdfUrl = URL(fileURLWithPath: "/Users/zmactavish/Desktop/Logo-discovery.pdf")
guard let doc = PDFDocument(url: pdfUrl) else {
    print("Cannot open doc")
    exit(1)
}

guard let page = doc.page(at: 1) else {
    print("Cannot get page")
    exit(1)
}

let mediaBox = page.bounds(for: .mediaBox)
let width = mediaBox.width
let height = mediaBox.height
print("width:", width, "height:", height)

let scaleWidth = 1600.0 / width
let scaleHeight = 1200.0 / height
let scale = min(scaleWidth, scaleHeight)

let targetWidth = Int(round(width * scale))
let targetHeight = Int(round(height * scale))
print("target size:", targetWidth, "x", targetHeight, "scale:", scale)

guard let bitmapRep = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: targetWidth,
    pixelsHigh: targetHeight,
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bytesPerRow: 0,
    bitsPerPixel: 0
) else {
    print("Failed to build NSBitmapImageRep")
    exit(1)
}

bitmapRep.size = NSSize(width: targetWidth, height: targetHeight)

NSGraphicsContext.saveGraphicsState()
guard let context = NSGraphicsContext(bitmapImageRep: bitmapRep) else {
    print("Failed context")
    exit(1)
}
NSGraphicsContext.current = context

let cgContext = context.cgContext
// Fill with white background
cgContext.setFillColor(CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0))
cgContext.fill(CGRect(x: 0, y: 0, width: targetWidth, height: targetHeight))

cgContext.saveGState()

// In a bitmap graphics context, the origin is top-left, and the y-axis points down.
// To draw PDF properly (where y-axis points up), we need to flip the coordinate system 
// BEFORE drawing, but wait, pdfPage.draw(with:to:) may already handle flipping if it knows the graphics context.
// Let's see if we need to flip it or if PDFKit's draw handles standard graphics contexts automatically.
// Let's do the standard scale first.
cgContext.scaleBy(x: scale, y: scale)
cgContext.translateBy(x: -mediaBox.origin.x, y: -mediaBox.origin.y)

page.draw(with: .mediaBox, to: cgContext)
cgContext.restoreGState()

NSGraphicsContext.restoreGraphicsState()

guard let pngData = bitmapRep.representation(using: .png, properties: [:]) else {
    print("Failed pngData")
    exit(1)
}

try! pngData.write(to: URL(fileURLWithPath: "test_page2.png"))
print("Done")
