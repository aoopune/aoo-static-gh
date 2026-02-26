"""Extract text from Udaan & Utkarsh PDF - all pages."""
from pathlib import Path

pdf_path = r"c:\Users\Yash Jangid\AppData\Roaming\Cursor\User\workspaceStorage\497ec69a7c509d8928dcafb4ef3b2c32\pdfs\bd656601-76c7-451d-b453-3ff8cb21ab6c\Inst. List Udaan & Utkarsh (1).pdf"
out_path = Path(__file__).parent / "udaan_utkarsh_raw_text.txt"

def main():
    import pdfplumber
    all_text = []
    with pdfplumber.open(pdf_path) as pdf:
        print(f"Pages: {len(pdf.pages)}")
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            tables = page.extract_tables()
            print(f"Page {i+1}: text len={len(text) if text else 0}, tables={len(tables) if tables else 0}")
            if text:
                all_text.append(f"--- PAGE {i+1} ---\n{text}")
            if tables:
                for ti, t in enumerate(tables):
                    for row in t:
                        if any(cell for cell in row):
                            all_text.append(" | ".join(str(c or "") for c in row))
    out_path.write_text("\n".join(all_text), encoding="utf-8")
    print(f"Written to {out_path}")

if __name__ == "__main__":
    main()
