// import {  } from "react"
// import {  } from "react-router-dom"
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export function Home() {
    const lisa = async () => {
            const db = await open({
                filename: '../../db/db.db',
                driver: sqlite3.cached.Database
            })
            const results = await db.get(`SELECT * FROM locations`)
            return await results.json()
        }

    return(
        <div>
            <ul className="database">
                {/* {lis.map()} */}
            </ul>
        </div>
    )
}