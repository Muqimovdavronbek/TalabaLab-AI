import {z} from 'zod';
const short=z.string().max(300);
export const solutionSchema=z.object({
 title:short,summary:z.string().max(20000),sections:z.array(z.object({title:short,content:z.string().max(20000)}).strict()).max(40),
 steps:z.array(z.object({label:short,content:z.string().max(10000)}).strict()).max(40),
 tables:z.array(z.object({title:short,columns:z.array(short).max(20),rows:z.array(z.array(z.string().max(4000)).max(20)).max(300)}).strict()).max(20),
 code:z.object({language:short,content:z.string().max(40000)}).strict().nullable(), assumptions:z.array(z.string().max(3000)).max(30),unresolved:z.array(z.string().max(3000)).max(30),
 defense:z.array(z.object({question:z.string().max(2000),answer:z.string().max(6000)}).strict()).max(20),citations:z.array(z.object({source_id:short,locator:short,excerpt:z.string().max(1000)}).strict()).max(40),
}).strict();
export const taskSchema=z.object({
 title:z.string().trim().min(1).max(160),subject:z.string().min(1).max(120),input:z.string().trim().max(50000),mode:z.enum(['explain','quick','ready','learn','check','defense']).default('explain'),
 work_type:z.enum(['exercise','lab','independent','slides','code','essay']).default('exercise'),variant:z.string().max(100).default(''),requirements:z.string().max(10000).default(''),
 due_date:z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable().optional(),attachment_ids:z.array(z.string().uuid()).max(5).default([]),
}).strict().refine(d=>d.input.length>0||d.attachment_ids.length>0,{message:'Topshiriq matni yoki fayl kiriting.',path:['input']});
export const profileSchema=z.object({name:z.string().max(160),university:z.string().max(250),faculty:z.string().max(250),group:z.string().max(100),teacher:z.string().max(160),city:z.string().max(100),language:z.enum(['uz','ru','en'])}).strict();
