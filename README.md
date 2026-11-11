# TalabaLab AI

**A student workspace for assignments, exact calculations and document exports.**

![TalabaLab AI workspace](public/images/talabalab-cover.png)

## Features

- Subject profiles, assignments, deadlines and versioned solutions.
- Exact matrix operations up to 8×8.
- Logic expressions and truth tables with up to eight variables.
- IPv4 subnetting, VLSM checks and ideal DC resistor calculations.
- An in-browser SQLite lab with SQL and CSV export.
- Text extraction from supported documents.
- Server-generated DOCX, PDF, PPTX and Markdown exports.
- Personal files, editable profiles, theme controls and PWA metadata.

The default profile name is **Dava** and can be changed in Settings.

## Architecture

| Component | Implementation |
| --- | --- |
| Interface | React, TypeScript and Vinext |
| Server | Cloudflare Worker |
| Records | D1 with Drizzle migrations |
| Files | R2 |
| Calculations | Deterministic solvers |
| AI | OpenAI Responses API adapter |

## Quick start

Node.js 22.13+ is required.

```bash
git clone https://github.com/Muqimovdavronbek/TalabaLab-AI.git
cd TalabaLab-AI
npm ci
npm run build
```

Initialize the local database:

```bash
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_thankful_smasher.sql
npm run dev
```

Use configuration names from `.env.example`. Keep real credentials in server-side secret configuration. Hosted authentication and storage bindings require their hosting integration; local and production databases are separate.

## Usage

Select a subject and work type, enter the task and optional attachments, run a solver or configured AI workflow, inspect the result and export the document.

Uploaded materials belong to the user's assignment workflow. Exact solver results and AI-generated content have separate verification states.

## AI availability

The adapter uses `OPENAI_MODEL` with a configured default of `gpt-5-mini`. A server-side `OPENAI_API_KEY`, model access and sufficient quota are required for live generation and image/PDF reading. Deterministic calculators, SQL, storage and exports can operate without an AI key.

A live key was not available during the recorded preparation checks. The interface reports unavailable AI rather than inventing a result. Web search, external code execution, SPICE, Telegram and HEMIS are not connected.

## Development

```bash
npx tsc --noEmit
npm run build
npm test
```

Tests use isolated D1/R2 fixtures and do not call live AI. [Verification report](docs/verification.md).

## Limits

Attachments: 5 MB each and five per task. SQLite is session-local; reset or timeout recreates its database. Exported Office files remain editable, while complex math may be represented as text. Offline metadata does not cache private files or APIs. Deadlines do not create scheduled notifications.

## License

Original project code: [MIT](LICENSE). Existing third-party font and library licenses remain in place.
