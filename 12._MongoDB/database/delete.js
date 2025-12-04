import db from './connection.js';

const gamedeleted = await db.games.deleteOne({title: { $regex: /Bird Game 3/i }});
console.log(gamedeleted)