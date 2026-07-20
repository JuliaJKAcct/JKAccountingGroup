import sys, json
import pdfplumber

pdf_path = sys.argv[1]

with pdfplumber.open(pdf_path) as pdf:
    result = None
    for page_idx, page in enumerate(pdf.pages):
        words = page.extract_words()
        lines = [w for w in words if set(w["text"]) == {"_"}]
        if len(lines) >= 2:
            lines.sort(key=lambda w: w["top"])  # first = signature line, second = date line
            sig, date = lines[0], lines[1]
            h = page.height
            result = {
                "page_index": page_idx,
                "page_height": h,
                "page_width": page.width,
                "signature_field": {"x0": sig["x0"], "x1": sig["x1"], "top": sig["top"], "bottom": sig["bottom"]},
                "date_field": {"x0": date["x0"], "x1": date["x1"], "top": date["top"], "bottom": date["bottom"]},
            }
            break
    print(json.dumps(result))
