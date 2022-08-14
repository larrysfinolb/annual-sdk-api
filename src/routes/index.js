const express = require('express');

const segRouter = require('./seg.router');
const admRouter = require('./adm.router');

const routerApi = (app) => {
	const router = express.Router();
	app.use('/api/v1', router);

	router.use('/seg', segRouter);
	router.use('/adm', admRouter);
};

module.exports = routerApi;
