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

    // const results = await db.exec(`create table locations(
    //     id integer primary key,
    //     name text,
    //     key text,
    //     user_id integer,
    //     arrivalTime datetime,
    //     FOREIGN KEY (user_id) REFERENCES users(id)
    // )`)
    // console.log(results)
})()