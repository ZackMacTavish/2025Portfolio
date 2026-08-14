import Foundation
import PDFKit
import AppKit

struct TargetPage {
    let pdfPath: String
    let pageNum: Int // 1-based page number
    let outputName: String
}

let targets: [TargetPage] = [
    TargetPage(pdfPath: "/Users/zmactavish/Desktop/Logo-discovery.pdf", pageNum: 2, outputName: "phase1-direction"),
    TargetPage(pdfPath: "/Users/zmactavish/Desktop/Logo-discovery.pdf", pageNum: 9, outputName: "phase1-peak"),
    TargetPage(pdfPath: "/Users/zmactavish/Desktop/Logo-discovery.pdf", pageNum: 24, outputName: "phase1-comparison"),
    TargetPage(pdfPath: "/Users/zmactavish/Desktop/Logo-discovery.pdf", pageNum: 27, outputName: "phase1-shortlist"),
    TargetPage(pdfPath: "/Users/zmactavish/Desktop/Logo-discovery-phase2.pdf", pageNum: 2, outputName: "phase2-letterform"),
    TargetPage(pdfPath: "/Users/zmactavish/Desktop/Logo-discovery-phase2.pdf", pageNum: 6, outputName: "phase2-layered-peak"),
    TargetPage(pdfPath: "/Users/zmactavish/Desktop/Logo-discovery-phase2.pdf", pageNum: 23, outputName: "phase2-energy"),
    TargetPage(pdfPath: "/Users/zmactavish/Desktop/Logo-discovery-phase2.pdf", pageNum: 31, outputName: "phase2-system")
]

for target in targets {
    let pdfUrl = URL(fileURLWithPath: target.pdfPath)
    guard let doc = PDFDocument(url: pdfUrl) else {
        print("Error: Cannot read PDF file at \(target.pdfPath)")
        exit(1)
    }
    
    // Page index is pageNum - 1
    guard let page = doc.page(at: target.pageNum - 1) else {
        print("Error: Cannot find page \(target.pageNum) in PDF \(target.pdfPath)")
        exit(1)
    }
    
    let mediaBox = page.bounds(for: .mediaBox)
    let width = mediaBox.width
    let height = mediaBox.height
    
    // Rentering PNGs with maximum size around 1600x1200 preserving aspect ratio
    let scaleWidth = 1600.0 / width
    let scaleHeight = 1200.0 / height
    let scale = min(scaleWidth, scaleHeight)
    
    let targetWidth = Int(round(width * scale))
    let targetHeight = Int(round(height * scale))
    
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
        print("Error: Failed to create NSBitmapImageRep")
        exit(1)
    }
    
    bitmapRep.size = NSSize(width: targetWidth, height: targetHeight)
    
    NSGraphicsContext.saveGraphicsState()
    guard let context = NSGraphicsContext(bitmapImageRep: bitmapRep) else {
        print("Error: Failed to create NSGraphicsContext")
        exit(1)
    }
    NSGraphicsContext.current = context
    
    let cgContext = context.cgContext
    // Fill background with white (or is transparent fine? The prompt says export at production resolution using macOS PDFKit,
    // usually PDFs have transparent or white backgrounds, let's render white background just to be safe as target is logo-discovery documents and PDFs usually expect standard white background, or we can use white background)
    cgContext.setFillColor(CGColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0))
    cgContext.fill(CGRect(x: 0, y: 0, width: targetWidth, height: targetHeight))
    
    cgContext.saveGState()
    cgContext.scaleBy(x: scale, y: scale)
    cgContext.translateBy(x: -mediaBox.origin.x, y: -mediaBox.origin.y)
    
    page.draw(with: .mediaBox, to: cgContext)
    cgContext.restoreGState()
    
    NSGraphicsContext.restoreGraphicsState()
    
    guard let pngData = bitmapRep.representation(using: .png, properties: [:]) else {
        print("Error: Failed to encode as PNG")
        exit(1)
    }
    
    let outUrl = URL(fileURLWithPath: "src/assets/piton-logo-discovery/\(target.outputName).png")
    try! pngData.write(to: outUrl)
    print("Rendered \(target.outputName).png: \(targetWidth)x\(targetHeight)")
}
