import sys, json
import pdfplumber

pdf_path = sys.argv[1]
DEEP_TEAL = (13/255, 42/255, 49/255)

def close(c, target, tol=0.02):
    return c and all(abs(c[i] - target[i]) < tol for i in range(3))

results = []
with pdfplumber.open(pdf_path) as pdf:
    total_pages = len(pdf.pages)
    for page_idx, page in enumerate(pdf.pages):
        h = page.height
        for r in page.rects:
            col = r.get("non_stroking_color")
            is_thin_bar = (r["bottom"] - r["top"]) < 30
            if isinstance(col, tuple) and len(col) >= 3 and close(col, DEEP_TEAL) and r["bottom"] > h - 80 and is_thin_bar:
                results.append({
                    "page_index": page_idx,
                    "page_height": h,
                    "page_width": page.width,
                    "x0": r["x0"], "x1": r["x1"], "top": r["top"], "bottom": r["bottom"],
                })
                break  # one bar per page is enough

print(json.dumps({"total_pages": total_pages, "bars": results}))
