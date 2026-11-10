# Tekshiruv dalili

Sana: 2026-11-09. Bu hisobot bajarilgan tekshiruvlarni va ularning chegaralarini qayd etadi.

| Tekshiruv | Natija | Dalil |
|---|---|---|
| TypeScript | Passed | `tsc --noEmit`, xatosiz |
| Production build | Passed | Vinext 5 bosqichli Worker build |
| Matritsa/mantiq/IP/DC va eksport | Passed | 13 ta test guruhi; ular ichida 20 ta mustaqil tuzilgan sistema |
| Worker backend | Passed | Izolyatsiyalangan D1/R2 bilan 18 ta integratsiya tekshiruvi |
| Saqlash va versiyalar | Passed | Hisob→task→version→evidence, shart tahriri, stale-write 409 |
| Ownership | Passed | Boshqa identity task/file/exportga kira olmaydi; delete ham 404 |
| TXT/DOCX/PPTX importi | Passed | Haqiqiy fayllardan matn, o‘zbek belgisi, 8/5 natijasi ajratildi |
| DOCX/PPTX eksporti | Passed (strukturaviy) | ZIP konteyneri, matn, slaydlar va ma’ruzachi qaydlari ochildi |
| PDF eksporti | Passed | Haqiqiy PDF yaratildi, ochildi, birinchi sahifa renderi ko‘rildi |
| Browser matritsa | Passed | x1=8/5, x2=9/5, det=5 va natija jadvali UI orqali kuzatildi |
| Browser SQL | Passed | SQLite 3.54.0 yuklandi; JOIN/AVG 4 satr va NULL qaytardi |
| Browser SQL xatosi | Passed | Noto‘g‘ri SELEC uchun haqiqiy SQLite syntax error ko‘rsatildi |
| Yorug‘/qorong‘i ko‘rinish | Passed | Settings ikki rejimda ko‘rildi |
| Mobil qurilma/emulyator | Not run | CSS mobil breakpoint va navigatsiya bor; alohida viewport sinovi bajarilmadi |
| AI live inference | Blocked | `OPENAI_API_KEY` yo‘q; 503 AI_NOT_CONFIGURED alohida tekshirildi |
| Rasm/PDF OCR | Blocked | Server adapteri bor; jonli AI kaliti yo‘q |
| Office vizual renderi | Not run | Office/LibreOffice renderer mavjud emas |
| Kod runner / SPICE / Telegram | Not implemented | Tayyor imkoniyat deb ko‘rsatilmagan |

SQL browserdagi alohida Web Workerda ishlaydi. Backend testlari ilovaning build qilingan Workerini chaqiradi; production bazasi yoki foydalanuvchi fayllariga tegmaydi. Previewning loopback HTTP manzili executor muhitidan bevosita ochilmadi; shu sabab API sinovi qo‘llab-quvvatlanadigan mahalliy workerd fixture orqali bajarildi. Bu autentifikatsiya yoki tarmoq himoyasini o‘zgartirmaydi.

Eksportdagi tekshiruv turlari alohida: ZIP signature/format ochilishi vizual render bilan bir xil kafolat emas. Jonli AI, haqiqiy mobil qurilma va barcha ilmiy topshiriqlarning to‘g‘riligi tekshirilgan deb da’vo qilinmaydi.
