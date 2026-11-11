# Recorded verification

Earlier report date: 2026-11-09. This records preparation checks and their limits.

| Area | Recorded result |
| --- | --- |
| TypeScript | Passed, tsc --noEmit |
| Production Worker build | Passed |
| Solvers and exports | 13 test groups, including 20 independently constructed systems |
| Backend | 18 isolated D1/R2 integration checks |
| Persistence/versioning | Task/version/evidence flow and stale-write 409 |
| Ownership | Cross-identity task/file/export access and deletion rejected |
| TXT/DOCX/PPTX import | Text, Unicode and exact-result extraction checked |
| DOCX/PPTX export | Container/text/slide/speaker-note structure checked |
| PDF export | Created, opened and first-page rendering inspected |
| Browser matrix | x1=8/5, x2=9/5 and determinant 5 observed |
| Browser SQL | JOIN/AVG/NULL results and real syntax errors observed |
| Theme | Light/dark settings viewed |
| Dedicated mobile viewport | Not run |
| Live AI and image/PDF reading | Blocked by missing live key |
| Office visual rendering | Not run |
| External code runner / SPICE / Telegram | Not implemented |

SQL runs in a separate browser Worker. Backend checks use an isolated built-Worker fixture, rather than production data or user files.

A structurally valid Office ZIP is not proof of visual layout. Live AI, native mobile use and correctness across all scientific tasks were not established by these checks.
