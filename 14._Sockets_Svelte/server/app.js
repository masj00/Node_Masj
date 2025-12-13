import "dotenv/config";
import express from 'express';
const app = express();

app.use(express.json());

//gør dette pga routers
import cors from 'cors';
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


import session from 'express-session';

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
});

app.use(sessionMiddleware);

import nicknamesRouter from './routers/nicknamesRouter.js';
app.use(nicknamesRouter);


import http from 'http';
const server = http.createServer(app)

//tuborg klammer henter et bibliotek
import { Server } from 'socket.io';
const io = new Server(server, {
    cors: {
        origin: ["http://localhost5173"],  // tillad localhost ikke anbefalet til produktion)
        credentials: true //måske
    }
});

io.engine.use(sessionMiddleware);

//on har en callback funktion der kaldes når en client forbinder
//emit giver data
io.on("connection", (socket) => {
    console.log("A socket connected", socket.id);

    socket.on("client-sends-color", (data) => {

        const session = socket.request.session;
        
        session.timesSubmitted = session.timesSubmitted + 1 || 1;

        data.timesSubmitted = session.timesSubmitted;
        //den tjekker hvor mange gange en bruger har sendt en farve
        console.log(data);

        //står noter i 13._Sockets_Plain
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