import { useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export function Check() {
    const [ queryParameters ] = useSearchParams()
    const name = queryParameters.get("name")
    const check = queryParameters.get("checkpoint");

    (async () => {
        const db = await open({
            filename: '../../db/db.db',
            driver: sqlite3.cached.Database
        })

        const results = db.run(`INSERT INTO locations(name, key, arrivalTime) values(?, ?, now)`,
        [name, check])
        console.log(results)
    })
    
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