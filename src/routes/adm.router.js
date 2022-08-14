const express = require('express');
const service = require('../services/adm.service');

const validatorHandler = require('../middlewares/validator.handler');
const { crearZona, listarZonas } = require('../schemas/adm.schema');

const router = express.Router();

router.post('/crearzona', validatorHandler(crearZona, 'body'), async (req, res, next) => {
	try {
		const body = req.body;
		const result = await service.Adm_CrearZona(body);
		res.json(result);
	} catch (error) {
		next(error);
	}
});
router.post('/listarzonas', validatorHandler(listarZonas, 'body'), async (req, res, next) => {
	try {
		const body = req.body;
		const result = await service.Adm_ListarZonas(body);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
