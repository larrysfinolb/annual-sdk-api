const express = require('express');
const service = require('../services/adm.service');

const validatorHandler = require('../middlewares/validator.handler');
const { crearZona, listarZonas, borrarZona, buscarZona, editarZona } = require('../schemas/adm.schema');

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
router.post('/buscarzona', validatorHandler(buscarZona, 'body'), async (req, res, next) => {
	try {
		const body = req.body;
		const result = await service.Adm_BuscarZona(body);
		res.json(result);
	} catch (error) {
		next(error);
	}
});
router.post('/editarzona', validatorHandler(editarZona, 'body'), async (req, res, next) => {
	try {
		const body = req.body;
		const result = await service.Adm_EditarZona(body);
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
router.post('/borrarzona', validatorHandler(borrarZona, 'body'), async (req, res, next) => {
	try {
		const body = req.body;
		const result = await service.Adm_BorrarZona(body);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
