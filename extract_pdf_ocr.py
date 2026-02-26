"""Extract text from PDF via OCR (image-based PDF)."""
from pathlib import Path

pdf_path = r"c:\Users\Yash Jangid\AppData\Roaming\Cursor\User\workspaceStorage\497ec69a7c509d8928dcafb4ef3b2c32\pdfs\bd656601-76c7-451d-b453-3ff8cb21ab6c\Inst. List Udaan & Utkarsh (1).pdf"
out_path = Path(__file__).parent / "udaan_utkarsh_raw_text.txt"

def main():
    import pypdfium2 as pdfium
    import pytesseract

    pdf = pdfium.PdfDocument(pdf_path)
    all_text = []
    n = len(pdf)
    for i in range(n):
        page = pdf[i]
        bitmap = page.render(scale=2)
        pil_image = bitmap.to_pil()
        bitmap.close()
        text = pytesseract.image_to_string(pil_image, lang="eng")
        if text.strip():
            all_text.append(f"--- PAGE {i+1} ---\n{text}")
        print(f"Page {i+1}: {len(text)} chars")
    out_path.write_text("\n".join(all_text), encoding="utf-8")
    print(f"Written to {out_path}")

if __name__ == "__main__":
    main()
