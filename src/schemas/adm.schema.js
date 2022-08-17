const joi = require('joi');

const token = joi.string();

const activoZona = joi.number();
const claseZona = joi.string().allow('');
const codigoZona = joi.string();
const descripcionZona = joi.string();
const representanteZona = joi.string().allow('');

const crearZona = joi.object({
	zona: {
		Activo: activoZona.required(),
		Clase: claseZona,
		Codigo: codigoZona.required(),
		Descripcion: descripcionZona.required(),
		Representante: representanteZona,
	},
	token: token.required(),
});
const buscarZona = joi.object({
	codigoZona: codigoZona.required(),
	token: token.required(),
});
const editarZona = joi.object({
	zona: {
		Activo: activoZona,
		Clase: claseZona,
		Codigo: codigoZona.required(),
		Descripcion: descripcionZona,
		Representante: representanteZona,
	},
	token: token.required(),
});
const listarZonas = joi.object({
	parametro: {
		CampoOrden: joi.string().allow(''),
		ExpresionFiltro: joi.string().allow(''),
		Orden: joi.string().allow(''),
		RegistroInicial: joi.number().allow(''),
		RegistroPorPagina: joi.number().allow(''),
	},
	token: token.required(),
});
const borrarZona = joi.object({
	codigoZona: codigoZona.required(),
	token: token.required(),
});

module.exports = {
	crearZona,
	listarZonas,
	borrarZona,
	buscarZona,
	editarZona,
};
