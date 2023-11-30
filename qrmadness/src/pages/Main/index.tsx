// import { useState, useEffect } from "react"
import './main.css'
// import {  } from "react-router-dom"
// import sqlite3 from 'sqlite3';
// import { open } from 'sqlite';

export function Home() {
    // const [data, setData] = useState<any[]>([])

    // const lisa = async () => {
    //         try {
    //             const db = await open({
    //                 filename: '../../db/db.db',
    //                 driver: sqlite3.cached.Database
    //             })
    //             const results = await db.get(`SELECT * FROM locations`)
    //             setData(results)
    //         } catch (error) {
    //             console.error('Data bank exploded, error found:', error)
    //         }
    //     }

        // useEffect(() => {
        //     lisa();
        // }, [])

    return(
        <div>
            <ul className="database">
                <li className="checkitem">
                    <div className="listGblack"><strong>Checkpoint - 1</strong></div>
                    <ul className="things">
                        <li className="item">
                            <strong>Corredor: Roger</strong>
                        </li>
                        <li className="item">
                            <strong>Tempo de chegada: 30/11/2023 5:51:12</strong>
                        </li>
                        <li className="item">
                            Id: 1
                        </li>
                    </ul>
                </li>
                <li className="checkitem">
                    <div className="listGblack"><strong>Checkpoint - 2</strong></div>
                    <ul className="things">
                        <li className="item">
                            <strong>Corredor: Felps</strong>
                        </li>
                        <li className="item">
                            <strong>Tempo de chegada: 30/11/2023 undefined</strong>
                        </li>
                        <li className="item">
                            Id: 2
                        </li>
                    </ul>
                </li>
                <li className="checkitem">
                    <div className="listGblack"><strong>Checkpoint - 5</strong></div>
                    <ul className="things">
                        <li className="item">
                            <strong>Corredor: Johnny Joestar</strong>
                        </li>
                        <li className="item">
                            <strong>Tempo de chegada: 30/11/2023 undefined</strong>
                        </li>
                        <li className="item">
                            Id: 3
                        </li>
                    </ul>
                </li>
                <li className="checkitem">
                    <div className="listGblack"><strong>Checkpoint - 7</strong></div>
                    <ul className="things">
                        <li className="item">
                            <strong>Corredor: John Wick</strong>
                        </li>
                        <li className="item">
                            <strong>Tempo de chegada: 30/11/2077 undefined</strong>
                        </li>
                        <li className="item">
                            Id: 4
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}