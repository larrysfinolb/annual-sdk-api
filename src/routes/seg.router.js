const express = require('express');
const service = require('../services/seg.service');

const validatorHandler = require('../middlewares/validator.handler');
const { loginSaint } = require('../schemas/seg.schema');

const router = express.Router();

router.get('/loginsaint', validatorHandler(loginSaint, 'body'), async (req, res, next) => {
	try {
		const body = req.body;
		const result = await service.SEG_LoginSaint(body);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
