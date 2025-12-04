import express from 'express';
const app = express();

//hele mappen er serveret som statisk indhold
app.use(express.static('public'));


import http from 'http';
const server = http.createServer(app)

//tuborg klammer henter et bibliotek
import { Server } from 'socket.io';
const io = new Server(server);

//on har en callback funktion der kaldes når en client forbinder
//emit giver data
io.on("connection", (socket) => {
    console.log("A socket connected", socket.id);

    socket.on("client-sends-color", (data) => {

        //sender data til alle andre clients undtagen den der sendte
        //socket.broadcast.emit("server-sends-color", data);

        //den sender data tilbage til den samme client og ikke andre (fx bevægelse sig i en 3D verden wasd) først lokalt så server
        //socket.emit("server-sends-color", data);

        //den sender data til alle clients inklusiv den der sendte (sendes til alle sockets i io namespace)
        io.emit("server-sends-color", data);
    });

    socket.on("disconnect", () => {
        console.log("Socket disconnected", socket.id);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));

//socket io Namespaces er en måde at opdele forbindelser på
//fx chat og spil i samme app
//kan oprette flere namespaces med io.of('/chat') og io.of('/game')
//hver namespace har sine egne events og sockets

//socket io Rooms er en måde at gruppere sockets inden for et namespace
//fx forskellige spilrum i et spil namespace
//kan oprette rooms med socket.join('room1') og socket.leave('room1')
//sende beskeder til et room med io.to('room1').emit('event', data)