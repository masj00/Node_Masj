import 'dotenv/config';
console.log("SESSION_SECRET:", process.env.SESSION_SECRET);

import express from 'express';
const app = express();

//------------------------
//session middleware godt at have øverst så det er tilgængeligt for alle routes
//id baseret så hver client får sin egen session
import session  from 'express-session';

app.use(session({
    //todo Change secret
  secret: process.env.SESSION_SECRET, 
  resave: false, //don't save session if unmodified
  saveUninitialized: true, //don't create session until something stored //only create session if user logs in or something
  cookie: { secure: false } //should be true in production with https
}));
//------------------------

import helmet from 'helmet';
app.use(helmet()); //sætter en masse headers der gør applikationen mere sikker

//----------------------------
//rate limiting middleware
import { rateLimit } from 'express-rate-limit'

const generalLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
});

// Apply the rate limiting middleware to all requests.
app.use(generalLimiter);

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 5, // Limit each IP to 5 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56
});

app.use("/auth", authLimiter);
//----------------------------


//sæt router op
import sessionRouter from './routers/sessionRouter.js';
app.use(sessionRouter);
import authRouter from './routers/authRouter.js';
app.use(authRouter);
//iplogger skal ikke køre på auth
import middlewareRouter from './routers/middlewareRouter.js';
app.use(middlewareRouter);



// en fallback route - wildcard route - catch all route
//kan også skrive /room/{*splat}
app.get("/{*splat}", (req, res) => {
    res.send(`<h1>404</h1><h3>page not found</h3>`);
});

app.all("/{*splat}", (req, res) => {
    res.status(404).send({data: "didn't match with route"});
});


const PORT = 8080 || process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`, server.address().port);
});