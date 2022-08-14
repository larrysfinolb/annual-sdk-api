const soap = require('soap');
const url = 'http://64.135.103.209:49152/SaintAdminServer?wsdl';

const Adm_CrearZona = async (body) => {
	const { zona, token } = body;

	const client = await soap.createClientAsync(url);
	const result = await client.Adm_CrearZonaAsync({ zona, token });

	return JSON.parse(result[0].Adm_CrearZonaResult);
};
const Adm_ListarZonas = async (body) => {
	const { parametro, token } = body;

	const client = await soap.createClientAsync(url);
	const result = await client.Adm_ListarZonasAsync({ parametro, token });

	return JSON.parse(result[0].Adm_ListarZonasResult);
};

module.exports = { Adm_CrearZona, Adm_ListarZonas };
