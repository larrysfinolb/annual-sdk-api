const joi = require('joi');

const token = joi.string();

const crearZona = joi.object({
	zona: {
		Activo: joi.number(),
		Clase: joi.string().allow(''),
		Codigo: joi.string().required(),
		Descripcion: joi.string().required(),
		Representante: joi.string().allow(''),
	},
	token: token.required(),
});
const listarZonas = joi.object({
	parametro: {
		CampoOrden: joi.string().allow(''),
		ExpresionFiltro: joi.string().allow(''),
		Orden: joi.string().allow(''),
		RegistroInicial: joi.number(),
		RegistroPorPagina: joi.number(),
	},
	token: token.required(),
});

module.exports = {
	crearZona,
	listarZonas,
};
