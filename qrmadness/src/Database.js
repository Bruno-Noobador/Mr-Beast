import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

(async () => {
    const db = await open({
        filename: './db/db.db',
        driver: sqlite3.cached.Database
    })


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
})()