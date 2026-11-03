# Mohammed Alghanam — Data Science Portfolio

A responsive personal portfolio built with **HTML, CSS, and vanilla JavaScript**, for cooperative training (COOP) applications.

## Preview locally

Double-click `index.html`, or start a local server in this folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Deploy to GitHub Pages

1. Create a **new repository** named `portfolio` on your GitHub account `mohammed-alghanam`. Keep your existing `Al-Warraq` repository separate.
2. Upload the **contents of this folder** to the *root* of the new repository: `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets/` folder.
3. Commit changes to the `main` branch.
4. Go to **Settings → Pages** in the `portfolio` repository.
5. Under **Build and deployment**, choose **Deploy from a branch**; set `main` and `/(root)`; click **Save**.
6. Once deployed, the site URL will normally be **https://mohammed-alghanam.github.io/portfolio/**.

GitHub Pages is static hosting; this portfolio works without a backend. It links to the Al-Warraq source repository; it does **not** host the Flask app.

## Things to update

- **CV:** Replace `assets/Mohammed_Alghanam_CV.pdf` with your newest CV when it changes. The included PDF was converted from the Word CV you previously supplied. It still omits R from the Programming line and has a singular "Traffic Accident" project title; correct those in your master CV before applying.
- **Project links:** Al-Warraq links to your public GitHub repo. The R accident analysis and numerical analysis GUI don't have links yet; add them in `index.html` after publishing those projects.
- **Email:** `mohalgh232@gmail.com` appears in several links and the copy-email control. Replace if needed.
- **University, experience, and project descriptions:** Confirm they remain accurate before sharing publicly.
- **Charts:** `assets/alwarraq-hit-rate.png` and `alwarraq-metrics.png` come from your Al-Warraq GitHub-ready project. The illustrative green graph for the traffic project is **decorative**, not a chart of actual accident statistics.

## File structure

```text
portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── favicon.svg
    ├── alwarraq-hit-rate.png
    ├── alwarraq-metrics.png
    ├── Mohammed_Alghanam_CV.pdf
    └── Mohammed_Alghanam_CV.docx
```

## Technical notes

- Mobile responsive, keyboard accessible, no external libraries.
- Includes theme toggle, project filtering, mobile navigation, and copy-email control.
- Only links to a public project where one is known; no false live demos or repository URLs are included.
- Avoid uploading API keys, credentials, private datasets, or materials you are not authorized to publish.
