import db from './connection.js';

const gameUpdate = await db.games.updateOne({title: "Tomb Raider"}, {$set: {title: "Tomb Raider Definitive Edition"}});
console.log(gameUpdate)