import db from './connection.js'

//db.exec run DDL and DCL against the database



//Yargs npm library kan også bruges til at parse kommando linje argumenter

//nu skal man skrive delete i kommando linjen for at slette tabellerne
const deleteMode = process.argv.includes('delete');

//console.log(deleteMode);

if (!deleteMode) {
//Altid slet det med foreign keys først
db.exec(`DROP TABLE IF EXISTS exercises;`);
db.exec(`DROP TABLE IF EXISTS users;`);
};

/*
Conventions for SQL
use lowwercase
use snake case
use plural for tables
*/

// DDL
db.exec(`
CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE,
    role TEXT CHECK (role IN ("ADMIN", "STAFF", "USER") )
);

CREATE TABLE IF NOT EXISTS exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT current_timestamp,
    difficulty INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
`);