import express from 'express';
const app = express();

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