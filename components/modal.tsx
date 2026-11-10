'use client';
import {useEffect,useRef,useId} from 'react';
import {X} from 'lucide-react';
export function Modal({title,onClose,children,wide=false}:{title:string;onClose:()=>void;children:React.ReactNode;wide?:boolean}){const ref=useRef<HTMLDialogElement>(null),id=useId();useEffect(()=>{ref.current?.showModal();return()=>ref.current?.close();},[]);return <dialog ref={ref} className={`modal ${wide?'wide-modal':''}`} aria-labelledby={id} onCancel={e=>{e.preventDefault();onClose();}} onClick={e=>{if(e.target===e.currentTarget)onClose();}}><div className="modal-inner"><div className="modal-heading"><h2 id={id}>{title}</h2><button className="icon-button" aria-label="Yopish" onClick={onClose}><X size={19}/></button></div>{children}</div></dialog>;}
