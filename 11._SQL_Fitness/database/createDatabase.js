import db from './connection.js'


//db.all for SELECT
//db.run for INSERT, UPDATE, DELETE 
//db.exec run DDL and DCL against the database (tillader at køre flere statements ad gangen)

//Yargs npm library kan også bruges til at parse kommando linje argumenter

//nu skal man skrive delete i kommando linjen for at slette tabellerne
const deleteMode = process.argv.includes('delete');
//Kig i scripts under package.json for at se hvordan det bruges

if (deleteMode) {
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


//Seeding
//DML
if(deleteMode){
db.run(`INSERT INTO users (username, role) VALUES ('anders', 'STAFF');`);
db.run(`INSERT INTO exercises (name, difficulty, user_id) VALUES ('squats', 7, 1); `);
db.run(`INSERT INTO exercises (name, user_id) VALUES ('burpees', 1); `);
};