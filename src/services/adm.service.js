const soap = require('soap');
const url = 'http://64.135.103.209:49152/SaintAdminServer?wsdl';

const Adm_CrearZona = async (body) => {
	try {
		const { zona, token } = body;

		const client = await soap.createClientAsync(url);
		const result = await client.Adm_CrearZonaAsync({ zona, token });

		return JSON.parse(result[0].Adm_CrearZonaResult);
	} catch (error) {
		throw error;
	}
};
const Adm_BuscarZona = async (body) => {
	try {
		const { codigoZona, token } = body;

		const client = await soap.createClientAsync(url);
		const result = await client.Adm_BuscarZonaAsync({ codigoZona, token });
		return JSON.parse(result[0].Adm_BuscarZonaResult);
	} catch (error) {
		throw error;
	}
};
const Adm_EditarZona = async (body) => {
	try {
		const { zona, token } = body;

		const client = await soap.createClientAsync(url);
		const result = await client.Adm_EditarZonaAsync({ zona, token });

		return JSON.parse(result[0].Adm_EditarZonaResult);
	} catch (error) {
		throw error;
	}
};
const Adm_ListarZonas = async (body) => {
	try {
		const { parametro, token } = body;

		const client = await soap.createClientAsync(url);
		const result = await client.Adm_ListarZonasAsync({ parametro, token });

		return JSON.parse(result[0].Adm_ListarZonasResult);
	} catch (error) {
		throw error;
	}
};
const Adm_BorrarZona = async (body) => {
	try {
		const { codigoZona, token } = body;

		const client = await soap.createClientAsync(url);
		const result = await client.Adm_BorrarZonaAsync({ codigoZona, token });

		return JSON.parse(result[0].Adm_BorrarZonaResult);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	Adm_CrearZona,
	Adm_BuscarZona,
	Adm_EditarZona,
	Adm_ListarZonas,
	Adm_BorrarZona,
};
