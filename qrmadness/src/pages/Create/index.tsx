import { useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export function Check() {
    const [ queryParameters ] = useSearchParams()
    const name = queryParameters.get("name")
    const check = queryParameters.get("checkpoint");
    
    const nav = useNavigate()
    
    useEffect(() => {
        nav('/')
        // window.opener = null;
        // window.open("", "_self");
        // window.close()
    })

    return(
        <>
        
        </>
    )
}