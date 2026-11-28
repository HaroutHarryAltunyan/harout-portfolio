import sys
from pypdf import PdfReader, PdfWriter
new, old, out = sys.argv[1:4]
w = PdfWriter()
for p in PdfReader(new).pages: w.add_page(p)
w.add_page(PdfReader(old).pages[-1])
w.write(out)
