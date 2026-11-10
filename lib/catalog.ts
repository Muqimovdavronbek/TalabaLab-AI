import type { Subject } from './types';
export const SUBJECTS:Subject[]=[
 {id:'algebra',name:'Chiziqli algebra',description:'Matritsalar, determinant va tenglamalar',color:'violet',icon:'matrix'},
 {id:'discrete',name:'Diskret tuzilmalar',description:'Mantiq, to‘plamlar va graflar',color:'blue',icon:'logic'},
 {id:'networks',name:'Kompyuter tarmoqlari',description:'IP, subnet, VLAN va marshrutlash',color:'mint',icon:'network'},
 {id:'database',name:'Ma’lumotlar bazasi',description:'SQL, ER model va normalizatsiya',color:'amber',icon:'database'},
 {id:'electronics',name:'Elektronika va sxemalar',description:'Elektr zanjirlari va raqamli mantiq',color:'rose',icon:'circuit'},
 {id:'marifat',name:'Ma’rifat darsi',description:'Konspekt, mustaqil ish va taqdimot',color:'sky',icon:'book'},
 {id:'programming',name:'Dasturlash',description:'Python, C++, Java, web va algoritmlar',color:'blue',icon:'code'},
 {id:'security',name:'Kiberxavfsizlik va Linux',description:'Xavfsiz dasturlash va o‘quv laboratoriyasi',color:'mint',icon:'shield'},
 {id:'mathematics',name:'Matematika',description:'Analiz, ehtimollik va tenglamalar',color:'violet',icon:'sigma'},
 {id:'physics',name:'Fizika',description:'Qonunlar, formulalar va masalalar',color:'amber',icon:'atom'},
 {id:'english',name:'Ingliz tili',description:'Grammatika, tarjima va mashqlar',color:'rose',icon:'language'},
 {id:'chemistry',name:'Kimyo',description:'Reaksiyalar va kimyoviy hisoblash',color:'mint',icon:'flask'},
 {id:'biology',name:'Biologiya',description:'Jarayonlar va asosiy tushunchalar',color:'mint',icon:'leaf'},
 {id:'history',name:'Tarix',description:'Voqealar, sanalar va manbalar',color:'amber',icon:'history'},
 {id:'economics',name:'Iqtisodiyot',description:'Modellar, tahlil va amaliy misollar',color:'blue',icon:'chart'},
 {id:'other',name:'Boshqa fan',description:'Istalgan mavzu bo‘yicha yordam',color:'violet',icon:'sparkles'},
];
export const MODES=[{id:'explain',name:'Tushuntirib yech',description:'Bosqichlar va tekshiruv'},{id:'quick',name:'Tezkor javob',description:'Qisqa va aniq natija'},{id:'ready',name:'Tayyor ish',description:'To‘liq hujjat mazmuni'},{id:'learn',name:'Meni o‘rgat',description:'Misol, ishora va mashq'},{id:'check',name:'Tekshirib ber',description:'Xatoni topish va tuzatish'},{id:'defense',name:'Himoyaga tayyorla',description:'Nutq va savol-javob'}];
export const WORK_TYPES=[{id:'exercise',name:'Masala / mashq'},{id:'lab',name:'Laboratoriya'},{id:'independent',name:'Mustaqil ish'},{id:'slides',name:'Taqdimot'},{id:'code',name:'Kod / SQL'},{id:'essay',name:'Esse / maqola'}];
export const DEFAULT_DISPLAY_NAME='Dava';
export const DEFAULT_PROFILE={name:DEFAULT_DISPLAY_NAME,university:'',faculty:'',group:'',teacher:'',city:'',language:'uz'};
export const EXAMPLES=[
 {subject:'algebra',label:'Matritsali tenglama',input:'A=[[2,1],[1,3]], b=[5,7]. Gauss usulida yech, determinantni top va Ax=b bilan tekshir.',tool:'matrix'},
 {subject:'networks',label:'IP va subnet hisobi',input:'192.168.10.77/27 uchun tarmoq, broadcast, maska va host oralig‘ini hisobla.',tool:'network'},
 {subject:'discrete',label:'Haqiqat jadvali',input:'(P→Q)∧P ifodasi uchun haqiqat jadvali tuz va tushuntir.',tool:'logic'},
 {subject:'electronics',label:'Elektr zanjiri',input:'9 V manba, ketma-ket 1000 Ω va 2000 Ω rezistorlar. Tok, kuchlanish va quvvatni hisobla.',tool:'circuit'},
];
export const DEFAULT_PROFILE_VALUE=DEFAULT_PROFILE;
