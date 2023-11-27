import { useEffect, useState } from "react"
// import "../../Database.js"
import { Link, useSearchParams, useNavigate } from "react-router-dom"

export function Check() {
    const [ queryParameters ] = useSearchParams()
    const name = queryParameters.get("nome")
    const check = queryParameters.get("checkpoint")
    
    
    const nav = useNavigate()
    console.log(name, check)
    
    useEffect(() => {
        nav('/')
        // window.opener = null;
        // window.open("", "_self");
        // window.close()
    })

    //fazer aquela porra loca de "insert into locations("name", "key", user_id, arrival time)"
    //db.exec('INSERT INTO locations(name, key, user_id, arrivalTime) values('?', '?', '?', 'now')',
    //[name, check]) 

    return(
        <>
        
        </>
    )
}