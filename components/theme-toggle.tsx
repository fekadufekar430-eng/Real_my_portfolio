/** Theme toggle: switches between the portfolio light and dark themes. */
"use client";
import {Moon,Sun} from "lucide-react"; import {useTheme} from "next-themes"; import {useEffect,useState} from "react";
export default function ThemeToggle(){const {theme,setTheme}=useTheme();const [mounted,setMounted]=useState(false);useEffect(()=>setMounted(true),[]);if(!mounted)return <div className="h-10 w-10"/>;return <button aria-label="Toggle theme" onClick={()=>setTheme(theme==="dark"?"light":"dark")} className="glass grid h-10 w-10 place-items-center rounded-full transition hover:scale-105">{theme==="dark"?<Sun size={17}/>:<Moon size={17}/>}</button>}
