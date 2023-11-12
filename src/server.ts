import * as sapper from '@sapper/server';
import express from 'express';
import compression from 'compression';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const app = express();

app.use(express.static(__dirname + '/static'),
		compression({ threshold: 0 }),
		sapper.middleware()); 

app.listen(PORT, () => {
	console.info(`We are up! on ${dev}`);
});
