'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {CheckCircle2,Info,AlertCircle,Copy,Check} from 'lucide-react';
import {useState} from 'react';
import type {Solution,Evidence} from '@/lib/types';
export function Markdown({text}:{text:string}){return <div className="prose"><ReactMarkdown remarkPlugins={[remarkGfm,remarkMath]} rehypePlugins={[rehypeKatex]} skipHtml components={{img:()=>null,a:({children,href})=><a href={href} target="_blank" rel="noopener noreferrer">{children}</a>}}>{text}</ReactMarkdown></div>;}
export function EvidenceBadge({evidence}:{evidence:Evidence}){return <span className={`badge ${evidence.status==='unverified'?'neutral':'green'}`}>{evidence.status==='unverified'?<Info size={13}/>:<CheckCircle2 size={13}/>} {evidence.status==='computed'?'Hisoblab tekshirildi':evidence.status==='executed'?'Bajarildi':'Mustaqil tekshirilmagan'}</span>;}
export function DataTable({table}:{table:Solution['tables'][number]}){return <div className="result-table"><h4>{table.title}</h4><div className="table-scroll"><table><thead><tr>{table.columns.map((c,i)=><th key={i}>{c}</th>)}</tr></thead><tbody>{table.rows.map((r,i)=><tr key={i}>{table.columns.map((_,j)=><td key={j}>{r[j]??''}</td>)}</tr>)}</tbody></table></div></div>;}
export function CopyButton({text,label='Nusxalash'}:{text:string;label?:string}){const [ok,setOk]=useState(false);return <button className="btn ghost small" onClick={async()=>{try{await navigator.clipboard.writeText(text);setOk(true);setTimeout(()=>setOk(false),2000);}catch{setOk(false);}}}>{ok?<Check size={14}/>:<Copy size={14}/>} {ok?'Nusxalandi':label}</button>;}
export function SolutionView({solution:s}:{solution:Solution}){return <div className="solution-content">
 <div className="answer-highlight"><Markdown text={s.summary}/></div>
 {s.sections.map((section,i)=><section className="solution-section" key={i}><h3>{section.title}</h3><Markdown text={section.content}/></section>)}
 {s.tables.map((t,i)=><DataTable table={t} key={i}/>)}
 {s.code&&<div className="code-result"><div><span>{s.code.language}</span><CopyButton text={s.code.content}/></div><pre><code>{s.code.content}</code></pre></div>}
 {s.assumptions.length>0&&<div className="note"><Info size={17}/><div><strong>Hisobga olingan shartlar</strong>{s.assumptions.map((t,i)=><p key={i}>{t}</p>)}</div></div>}
 {s.unresolved.length>0&&<div className="note warning"><AlertCircle size={17}/><div><strong>Aniqlashtirish kerak</strong>{s.unresolved.map((t,i)=><p key={i}>{t}</p>)}</div></div>}
 </div>;}
export function StepView({steps}:{steps:Solution['steps']}){return steps.length?<div className="steps-list">{steps.map((step,i)=><div className="step" key={i}><span>{i+1}</span><div><h3>{step.label}</h3><Markdown text={step.content}/></div></div>)}</div>:<div className="empty compact"><Info/><h3>Alohida hisoblash bosqichlari yo‘q</h3><p>Izoh va natijani “Javob” bo‘limida ko‘rishingiz mumkin.</p></div>;}
export function VerificationView({evidence:e}:{evidence:Evidence}){return <div className="verification"><EvidenceBadge evidence={e}/><h3>{e.tool}</h3><p className="muted">Versiya {e.version} · {new Date(e.timestamp).toLocaleString()}</p><ul>{e.details.map((x,i)=><li key={i}><CheckCircle2 size={16}/><span>{x}</span></li>)}</ul></div>;}
