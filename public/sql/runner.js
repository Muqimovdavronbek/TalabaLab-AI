/* SQL.js/SQLite runs only in this isolated browser Worker. It has no application database binding. */
importScripts('/sql/sql-wasm.js');
let SQL,db;
const seed=`CREATE TABLE talabalar (id INTEGER PRIMARY KEY, ism TEXT NOT NULL, guruh TEXT);
CREATE TABLE fanlar (id INTEGER PRIMARY KEY, nom TEXT NOT NULL);
CREATE TABLE natijalar (talaba_id INTEGER REFERENCES talabalar(id), fan_id INTEGER REFERENCES fanlar(id), ball REAL);
INSERT INTO talabalar VALUES (1,'Aziza','76-25'),(2,'Javohir','76-25'),(3,'Madina','77-25'),(4,'Sardor','77-25');
INSERT INTO fanlar VALUES (1,'Chiziqli algebra'),(2,'Ma’lumotlar bazasi'),(3,'Tarmoqlar');
INSERT INTO natijalar VALUES (1,1,92),(1,2,88),(2,1,76),(2,2,85),(3,1,95),(3,3,91),(4,2,NULL);`;
function reset(){if(db)db.close();db=new SQL.Database();db.run(seed);}
const ready=initSqlJs({locateFile:file=>'/sql/'+file}).then(module=>{SQL=module;reset();postMessage({type:'ready',version:db.exec('SELECT sqlite_version()')[0].values[0][0]});});
onmessage=async e=>{const {id,kind,sql}=e.data;try{await ready;if(kind==='reset'){reset();postMessage({id,type:'reset'});return;}
if(typeof sql!=='string'||!sql.trim()||sql.length>20000)throw new Error('SQL 1–20 000 belgidan iborat bo‘lsin.');
if(/\b(attach|detach|pragma|load_extension|readfile|writefile|fts3_tokenizer)\b/i.test(sql))throw new Error('Fayl, extension va tashqi baza operatsiyalari bu mashq muhitida o‘chirilgan.');
const start=performance.now(),results=[];let statements=0;
for(const stmt of db.iterateStatements(sql)){if(++statements>50)throw new Error('Bitta bajarishda ko‘pi bilan 50 ta SQL statement.');const columns=stmt.getColumnNames(),rows=[];let truncated=false;
try{while(stmt.step()){if(rows.length>=1000){truncated=true;break;}rows.push(stmt.get().map(v=>v instanceof Uint8Array?`[BLOB: ${v.length} bayt]`:v));if(performance.now()-start>6000)throw new Error('Hisoblash vaqt limiti tugadi.');}if(columns.length||db.getRowsModified())results.push({columns,rows,truncated,changes:db.getRowsModified()});}finally{stmt.free();}}
postMessage({id,type:'result',results,statements,elapsed:performance.now()-start});}catch(err){postMessage({id,type:'error',message:err instanceof Error?err.message:String(err)});}};
