import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { glovar } from './pages/Create/index.tsx'


var currentdate = new Date(); 
const datetime = currentdate.getDate() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
const name = glovar[0]
const check = glovar[1]

const dbconnect = async () => {
    const db = await open({
        filename: './db/db.db',
        driver: sqlite3.cached.Database
    })

    if(name != null && check != null) {
        const results = db.run(`INSERT INTO locations(name, key, arrivalTime) values(?, ?, ?)`,
        [name, check, datetime])
        console.log(results)
    }

    // const results = await db.exec(`create table users(
    //     id integer primary key,
    //     name text
    // )`)

    // const results = await db.exec(`create table admin(
    //     id integer primary key,
    //     name text
    // )`)

    // const results = await db.run(`insert into locations(name, key, arrivalTime) values('Roger', 1, 'now')`)

    // const results = await db.exec(`create table locations(
    //     id integer primary key,
    //     name text,
    //     key text,
    //     arrivalTime datetime
    // )`)

    // const results = await db.exec(`DROP TABLE locations`)
    // console.log(results)
}

// export { dbconnect }