import { MongoClient } from 'mongodb';

const url = "mongodb://127.0.0.1:27017";

//instanciere
const client = new MongoClient(url);

await client.connect();

const dbName = "games";


const gamesLibrary = client.db(dbName);

export default {
    games: gamesLibrary.collection("games"),
    game_character: gamesLibrary.collection("game_character")
};