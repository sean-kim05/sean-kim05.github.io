# Sean Kim — Portfolio

**Live:** [sean-kim05.github.io](https://sean-kim05.github.io/)

My personal portfolio — a hand-built, **single-file site** (no framework, no build step) showcasing my experience, projects, and skills as a Computer Science student at **UC Irvine (Class of 2027)**.

![Portfolio preview](preview.png)

---

## ✨ The site itself

Built from scratch in vanilla **HTML / CSS / JS** — one `index.html`, zero dependencies, zero build step. Black editorial theme, **Archivo · IBM Plex Mono**.

- **Interactive `⌘K` terminal** — a real command line (`help`, `whoami`, `projects`, `skills`, `resume`, `contact`, `theme`, `date`, `ls`, `clear`) with a `sudo hire sean` easter egg
- **Self-typing hero terminal** that boots the page — `whoami` → `ls projects/` → `open collabcode --stats`
- **Expandable work index** with an animated SVG architecture diagram for CollabCode (packets fanning out across the room in real time)
- Live Irvine clock, copy-to-clipboard email, and a tab title that calls you back when you leave
- **Keyboard-driven**: `1–4` jump to sections, `` ` `` or `⌘K` opens the terminal, `Esc` closes; `theme` cycles the accent color
- Layered background — radial glow, faint grid, and SVG film-grain noise
- Fully responsive down to a single-column mobile layout

---

## 🚀 Featured work

| Project | What it is | Stack | Links |
|---|---|---|---|
| **CollabCode** | Real-time collaborative code editor — live cursors, follow mode, multi-file rooms. **50 concurrent clients/room @ 17 ms p95 sync latency**; Redis / PostgreSQL persistence; Claude across 4 streaming modes (generate · fix · explain · improve) with sandboxed server-side execution | React, TypeScript, Monaco, Flask-SocketIO, Redis, PostgreSQL, Claude API | [Live](https://collaborative-code-editor-livid.vercel.app) · [Code](https://github.com/sean-kim05/collaborative-code-editor) |
| **Ada** | Personal agent OS — give it a goal and watch a live trace stream every step (plan → tool call → observe → final). A model router sends cheap subtasks to a local Qwen-14B and hard reasoning to Claude | FastAPI, PydanticAI, React, Vite, PostgreSQL, Redis, Qdrant | [Code](https://github.com/sean-kim05/ada) |
| **Docent** | Agentic research assistant — decomposes a question into sub-questions, routes each to your docs or the live web, retrieves + reranks, and streams one grounded answer with inline citations. Hand-rolled RAG, no LangChain/LlamaIndex | Next.js, TypeScript, FastAPI, Pinecone, Voyage, Tavily | [Live](https://agentic-research-assistant-nine.vercel.app) |
| **Briefly** | AI standup tool living entirely at the edge — a custom SSE pipeline streams Llama 3.3 tokens live while the full response is captured server-side; weekly summaries run as a separate inference pass | Cloudflare Workers, Durable Objects, Workers AI, Llama 3.3 | [Live](https://cf-ai-standup.skim8705.workers.dev) · [Code](https://github.com/sean-kim05/cf_ai_standup) |

---

## 💼 Experience

- **MIADVG** — *Software Engineer Intern* (Jun – Sep 2025, Irvine, CA): shipped & maintained 3 React/**Next.js** apps in TypeScript with Tailwind to **10,000+ combined users**; built Express/Node REST endpoints across PostgreSQL & MySQL with OAuth 2.0, Stripe & Twilio; automated CI/CD on AWS EC2 via GitHub Actions + Vitest (2–3 releases/week).
- **CALIT2, UC Irvine** — *Software Developer Intern* (Jan – May 2025, Costa Mesa, CA): built a Flask-SocketIO backend streaming 5+ camera feeds to a React dashboard over WebSockets at **100–200 ms latency**; deduplicated detections with Redis TTL keys and routed events through RabbitMQ priority queues; fine-tuned YOLO with PyTorch transfer learning (**+8 mAP**).
- **UC Irvine** — *Undergraduate Research Assistant* (Jan – Jun 2024, Irvine, CA): built Python ETL pipelines (BeautifulSoup, PyPDF2, Pandas) normalizing thousands of UCI PDF/HTML docs into training-ready text for iGPT, and evaluated GPT-3.5 outputs on UCI-specific queries — early-stage work that later became **ZotGPT**.

---

## 🧰 Tech stack

- **Languages:** Python · TypeScript · JavaScript · Java · C++ · SQL
- **Frameworks:** React · Next.js · Node.js · Express · Flask · Tailwind CSS · WebSockets
- **Infra & AI:** AWS EC2 · Cloudflare Workers · Docker · RabbitMQ · Redis · PostgreSQL · MySQL · Claude API · PyTorch · YOLO

---

## 🛠️ Run locally

Static site — no build required:

```bash
git clone https://github.com/sean-kim05/sean-kim05.github.io.git
cd sean-kim05.github.io

# open index.html directly, or serve it:
python -m http.server 8000   # → http://localhost:8000
```

## 🚢 Deploy

Hosted on **GitHub Pages**. Pushing to `main` auto-deploys to [sean-kim05.github.io](https://sean-kim05.github.io/).

---

## 📬 Contact

- **Email:** skim8705@gmail.com
- **LinkedIn:** [/in/seankim08](https://linkedin.com/in/seankim08)
- **GitHub:** [/sean-kim05](https://github.com/sean-kim05)
- **Résumé:** [assets/Sean_Kim_Resume.pdf](assets/Sean_Kim_Resume.pdf)
