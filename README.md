# SnapText

SnapText is a small web app that extracts text from screenshots and images using client-side OCR.

You upload an image, it processes it in the browser, and gives you clean, copyable text. No signup, no backend.

---

## What it does

* Upload images by click or drag & drop
* Extract text using OCR (Tesseract.js)
* Show loading state while processing
* Preview the uploaded image
* Copy extracted text with one click
* Clear and re-upload easily
* Smooth scrolling between upload and results

---

## Tech used

* Next.js (App Router)
* React + TypeScript
* Tesseract.js
* react-dropzone
* shadcn/ui
* Tailwind CSS
* React Context API

---

## Notes on structure

Upload state (loading, preview, extracted text, scrolling) is handled through a single Context provider.
This keeps components simple and avoids prop drilling, especially since uploads can be triggered from multiple places in the UI.

---

## Run locally

```bash
npm install
npm run dev
```

---

## Why this exists

This project was built as a portfolio piece to practice:

* clean React state management
* UI flow and UX details
* refactoring as complexity grows
