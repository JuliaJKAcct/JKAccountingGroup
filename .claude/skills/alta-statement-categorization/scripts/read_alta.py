#!/usr/bin/env python3
"""Get the lines off an ALTA PDF, typed or scanned.

    python read_alta.py --file statement.pdf              # extract text
    python read_alta.py --file scan.pdf --render out/     # scanned -> page PNGs

A born-digital ALTA gives up its text directly. A scanned one gives up nothing,
and there is no OCR here on purpose: read the rendered pages with vision instead,
which handles the debit/credit column layout far better than tesseract does.

Column position carries the meaning on an ALTA and text extraction flattens it,
so amounts land in one run with no indication of whose column they came from.
Do not guess from order. Reconstruct the sides from the arithmetic:

    seller debits + due to seller  = seller credits
    buyer credits + due from buyer = buyer debits

Assign each line to the side that makes both identities hold, then check your
assignment against the printed Subtotals / Totals rows. If they do not tie to the
penny, the reading is wrong - never carry an unreconciled statement into a
workbook.

Requires: pip install pdfplumber pypdfium2
"""
import argparse
import os
import sys


def extract_text(path):
    import pdfplumber
    pages = []
    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            pages.append(page.extract_text() or "")
    return pages


def render(path, outdir, scale=3):
    import pypdfium2 as pdfium
    os.makedirs(outdir, exist_ok=True)
    pdf = pdfium.PdfDocument(path)
    written = []
    for i in range(len(pdf)):
        target = os.path.join(outdir, f"page{i + 1}.png")
        pdf[i].render(scale=scale).to_pil().save(target)
        written.append(target)
    return written


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--file", required=True, help="the ALTA .pdf")
    ap.add_argument("--render", metavar="DIR",
                    help="also render each page to a PNG for vision reading")
    ap.add_argument("--scale", type=float, default=3,
                    help="render scale, default 3 (~216 dpi)")
    args = ap.parse_args()

    pages = extract_text(args.file)
    empty = sum(1 for p in pages if not p.strip())
    for i, text in enumerate(pages, start=1):
        print(f"--- PAGE {i} ---")
        print(text if text.strip() else "(no text layer - scanned)")

    if empty:
        print(f"\n{empty} of {len(pages)} pages have no text layer. "
              "This is a scan - render it and read the pages with vision.",
              file=sys.stderr)
    if args.render:
        for path in render(args.file, args.render, args.scale):
            print(f"wrote {path}", file=sys.stderr)
    elif empty:
        print("Re-run with --render <dir> to produce the page images.",
              file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
