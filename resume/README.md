# Resume source

`resume.html` is the source of `public/Harout_Altunyan_Resume.pdf` (pages 1-2). Page 3 is the
UC Berkeley certificate page carried over from the previous PDF.

```sh
cd resume
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer \
  --print-to-pdf=resume.pdf "file://$PWD/resume.html"
cp ../public/Harout_Altunyan_Resume.pdf previous.pdf
uv run --no-project --with pypdf python append-certificate.py resume.pdf previous.pdf ../public/Harout_Altunyan_Resume.pdf
rm resume.pdf previous.pdf
```

Keep the resume to two pages before the certificate.
