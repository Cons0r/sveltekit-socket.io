// to use socket.io, this file should be run in lieu of out/index.js
import { realtimeapp } from './realtime.js';
import express from 'express';
import http from 'http';
import * as socket from 'socket.io';

import * as originalserver from './out/handler.js';

const app = express()
const server = http.createServer(app)

const io = new socket.Server(server);
realtimeapp(io);

app.use(originalserver.handler)

const path = process.env["SOCKET_PATH"] || false;
const host = process.env["HOST"] || '0.0.0.0';
const port = process.env["PORT"] || (!path && '3000');

server.listen({ path, host, port }, () => {
	console.log(`Listening on ${path ? path : host + ':' + port}`);
});

export { host, path, port, server };
