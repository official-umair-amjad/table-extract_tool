
# reference.md — ExtractTable‑style tool with remove.bg‑style UX

**Goal**: A polished marketing + demo website where users can upload an image/PDF, see a **mocked** table extraction instantly, and download CSV/XLSX — with messaging and visual hierarchy **inspired by remove.bg**, but for **table extraction**.

> This v1 ships without real OCR to keep scope tight. We include clean integration seams to plug a real engine later (AWS Textract, Azure Document Intelligence, Tesseract, etc.).

---

## Brand & voice
- **Tone**: confident, clear, benefit‑first. Avoid jargon. Short sentences.
- **Tagline**: “Extract tables from images & PDFs — in seconds.”
- **Subhead**: “Upload a file. Get clean rows. Export to CSV or Excel. No templates.”
- **CTA labels**: “Try the demo”, “Upload a file”, “Use a sample”

### Visual
- **Typeface**: Inter.
- **Colors** (Tailwind CSS variables):  
  - `--brand`: #5B8DEF (primary)
  - `--brand-ink`: #0B1221
  - `--brand-ink-soft`: #6B7280
  - `--accent`: #10B981
  - `--surface`: #0f172a (slate-900) for dark header on scroll
- Rounded corners (xl–2xl), soft shadows, calm motion.

---

## Pages & routes
- `/` — Home (hero with upload, use cases, steps, testimonials, FAQ teaser)
- `/demo` — Full interactive demo (queue, previews, downloads)
- `/how-it-works` — Explains pipeline (Upload → Detect → Export)
- `/pricing` — 3 plans (Free, Pro, Team) — UI only in v1
- `/api` — Simple API docs with code samples hitting local mock
- `/faq` — Full FAQ
- `/legal/privacy`, `/legal/terms` — Short boilerplate

---

## Home content (copy blocks)
**Hero H1**: Extract tables from images & PDFs — in seconds.  
**Hero subhead**: Skip manual copy‑paste. Drop your file and download clean rows as CSV or Excel.  
**Primary CTA**: Upload a file  
**Secondary**: Use a sample

**Benefits (3-up)**
- **Fast by default** — instant results on typical receipts and invoices.
- **No templates** — works without drawing boxes or tuning coordinates.
- **Export anywhere** — CSV/XLSX for Sheets, Excel, BI tools.

**How it works (3 steps)**
1. **Upload** — drag & drop a JPG/PNG or PDF.
2. **Detect** — we find the grid and read cell text.
3. **Export** — preview, copy, or download CSV/XLSX.

**Use cases**
Receipts • Invoices • Bank statements • Lab reports • Menus • Price lists

**Trust strip (static logos)**
“Used by teams at” (placeholder logos in `/public/samples/logos/`)

**Testimonials (static)**
> “Turned a 3‑hour slog into a 5‑minute export.” — Ops Manager  
> “Exactly what we needed to move data into Sheets.” — Analyst

**FAQ teaser** (link to /faq)
- Is this free? — The demo is free. (Pricing available soon.)
- Is my file uploaded? — In the demo, files process locally and are not stored.

---

## Demo page specifics
- Drag‑and‑drop area + file picker.
- Accept: `.jpg,.jpeg,.png,.pdf` up to 15MB each (soft limit).
- Queue list: show thumbnail/page icon, name, size, status: _Queued → Processing → Completed / Error_.
- On complete: render `TablePreview` with first 30 rows + pager (if multiple tables).
- Actions: **Download CSV**, **Download XLSX**, **Copy table** (to clipboard), **Remove**.
- Empty state: illustration + “Drop a file or use a sample”.

### Mock results
- **Images**: return a 3×5 table like:
  | Item | Qty | Price | Tax | Total |
- **PDFs**: simulate 2 tables (pages 1–2).

---

## API docs page
- Explain: “1 POST request → rows back.”
- **NOTE**: In v1 the endpoint is mocked; real integration goes in `lib/engines/*` later.
- Tabs with snippets (curl / Node / Python):

**curl**
```bash
curl -X POST http://localhost:3000/api/process   -F "file=@./samples/receipt.jpg"
```

**Node**
```ts
const fd = new FormData();
fd.append("file", myFile);
const res = await fetch("/api/process", { method: "POST", body: fd });
const json = await res.json();
```

**Python**
```py
import requests
files = {'file': open('samples/receipt.jpg','rb')}
print(requests.post('http://localhost:3000/api/process', files=files).json())
```

---

## Components (names & duties)
- `Header`, `Footer`
- `Container` (max-w and padding wrapper)
- `HeroUpload` (dropzone card used on Home)
- `Uploader` (used on `/demo` with queue)
- `SampleStrip` (animated before→after carousel)
- `StepItem` (icon + title + text)
- `UseCaseCard` (icon + label)
- `TestimonialCard`
- `FAQ` (shadcn Accordion)
- `TablePreview` (renders `rows: string[][]` with sticky header; supports copy/download)
- `CodeTabs` (API examples with Tabs + Code block)
- `Toaster` (shadcn)

### Component behavior notes
- `HeroUpload`: On drop of multiple files, push to store and navigate to `/demo`.
- `Uploader`: Uses `zustand` store: `items: UploadItem[]` where
  ```ts
  type UploadItem = { id: string; file: File; status: 'queued'|'processing'|'completed'|'error'; tables?: string[][][]; error?: string; };
  ```
- `TablePreview`: provide `Download CSV` and `Download XLSX`. For multi-table, a Tabs selector.

---

## Route handlers (mocked)
- **`POST /api/process`**
  - Accepts multipart file(s); for now, handle single `file` per request.
  - Sleep 1500–2000ms; return:
    ```ts
    { jobId, status: 'completed', rows: string[][], tables?: string[][][] }
    ```
  - Use a module‑scoped Map to store `{jobId: Result}` to simulate async fetch.
- **`GET /api/result?jobId=...`**
  - Returns the matching record or 404.

> **Integration point**: Later, swap the mock with a real engine in `lib/engines/provider.ts` with a strategy pattern:
```ts
export interface Engine { process(file: FileLike): Promise<EngineResult>; }
export const engine: Engine = new MockEngine(); // replace with TextractEngine etc.
```

---

## Types
```ts
export type TableRows = string[][];
export type EngineResult = { rows?: TableRows; tables?: TableRows[]; };
```

---

## Styling & layout
- Use Tailwind with container queries where appropriate.
- Header: transparent over hero; add a subtle background/blur once scrolled 24px.
- Cards: `rounded-2xl shadow-sm border`.
- Motion: fade/slide in sections on scroll; subtle hover lifts.

---

## FAQ (full list for /faq)
- **Is this the real extractor?** v1 is a demo with mocked results so you can see the UX. The API contract won’t change when a real engine is added.
- **Do you store files?** In the demo, no. Files are processed in-memory and discarded after the response.
- **What file types are supported?** JPG, PNG, and PDF in the demo. More later.
- **How accurate is it?** Accuracy depends on input quality; claims will be published with benchmarks once the engine is live.
- **Can I integrate via API?** Yes. The local API is stable; swap the engine in `lib/engines` when ready.
- **Will there be pricing/auth?** Coming next. Pricing UI is already on /pricing.

---

## Pricing (UI only)
- **Free** — 10 demo files/day, community support
- **Pro** — Placeholder price — priority queue, large files
- **Team** — Placeholder price — shared workspace

Include disabled “Get started” buttons with a tooltip: “Auth coming soon”.

---

## Sample assets
Place these under `/public/samples/`:
- `receipt.jpg`, `invoice.jpg` (free-to-use placeholders)
- `demo-loop.webm` (short screen recording or video placeholder)
- simple monochrome logos (svg) for trust strip

If assets are missing, render graceful fallbacks.

---

## SEO
- Descriptive titles/desc per page, e.g., “Image/PDF to CSV — Fast Table Extraction”.
- OG images per route with the brand color background + tool name.

---

## Roadmap (next steps list Cursor should print)
1. Swap mock with real OCR engine (provider strategy in `lib/engines`).
2. Add auth (NextAuth or Supabase) and usage tracking.
3. Stripe pricing, credit system, rate limiting.
4. Background jobs & webhooks for large PDFs.
5. Upload to S3 and signed URLs.
6. Publish status page and basic analytics.

---

## Notes on inspiration
- The **hero composition, single primary CTA, and “5 seconds” simplicity** take cues from remove.bg.
- The **capability (table extraction), credit model, and dev‑centric messaging** nod to ExtractTable.
- We **do not** copy their words; we use our own clear, benefit‑first copy.

— Last updated: 2025-08-31
