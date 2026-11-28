# Resume source

`resume.html` is the source of `public/Harout_Altunyan_Resume.pdf` (pages 1-3). The last page is the
UC Berkeley certificate page carried over from the previous PDF.

```sh
cd resume
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer \
  --print-to-pdf=resume.pdf "file://$PWD/resume.html"
cp ../public/Harout_Altunyan_Resume.pdf previous.pdf
uv run --no-project --with pypdf python append-certificate.py resume.pdf previous.pdf ../public/Harout_Altunyan_Resume.pdf
rm resume.pdf previous.pdf
```

Keep the resume to three pages before the certificate. `append-certificate.py` takes the last page of the previous PDF. If `~/.cache/uv` is broken (T9 unmounted), prefix `UV_CACHE_DIR=$TMPDIR/uvc`.
