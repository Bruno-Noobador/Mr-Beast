import { useState, useEffect } from "react"
import './main.css'
// import {  } from "react-router-dom"
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export function Home() {
    const [data, setData] = useState<any[]>([])

    const lisa = async () => {
            try {
                const db = await open({
                    filename: '../../db/db.db',
                    driver: sqlite3.cached.Database
                })
                const results = await db.get(`SELECT * FROM locations`)
                setData(results)
            } catch (error) {
                console.error('Data bank exploded, error found:', error)
            }
        }

        useEffect(() => {
            lisa();
        }, [])

    return(
        <div>
            <ul className="database">
                {data.map((item, index) => (
                    <li key={index} className="checkitem">
                        <div className="listGblack"><strong>Checkpoint - {item.key}</strong></div>
                        <ul className="things">
                            <li className="item">
                                <strong>Corredor: {item.name}</strong>
                            </li>
                            <li className="item">
                                <strong>Tempo de chegada: {item.arrivalTime}</strong>
                            </li>
                            <li className="item">
                                Id: {item.id}
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}