export type Subject = { id:string; name:string; description:string; color:string; icon:string; custom?:boolean };
export type Solution = {
  title:string; summary:string; sections:{title:string;content:string}[]; steps:{label:string;content:string}[];
  tables:{title:string;columns:string[];rows:string[][]}[]; code:{language:string;content:string}|null;
  assumptions:string[]; unresolved:string[]; defense:{question:string;answer:string}[];
  citations:{source_id:string;locator:string;excerpt:string}[];
};
export type Evidence = {status:'computed'|'executed'|'unverified'; tool:string; version:string; details:string[]; timestamp:string};
export type Task = {id:string;title:string;subject:string;input:string;mode:string;work_type:string;variant:string;requirements:string;due_date:string|null;status:string;input_version:number;current_version:string|null;error:string|null;created_at:string;updated_at:string};
export type Version = {id:string;task_id:string;input_version:number;revision:number;solution:Solution;evidence:Evidence;origin:string;created_at:string};
export type SourceFile={id:string;name:string;mime:string;size:number;task_id:string|null;created_at:string;extracted_text?:string|null};
export type Profile={name:string;university:string;faculty:string;group:string;teacher:string;city:string;language:string};
export type Capabilities={ai:boolean;model:string;database:boolean;storage:boolean;identity:boolean};
