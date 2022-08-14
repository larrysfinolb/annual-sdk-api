const soap = require('soap');

const SEG_LoginSaint = async (body) => {
	const { idUser, password } = body;

	const client = await soap.createClientAsync('http://64.135.103.209:49152/SaintAdminServer?wsdl');
	const result = await client.SEG_LoginSaintAsync({ idUser, password });

	return JSON.parse(result[0].SEG_LoginSaintResult);
};

module.exports = {
	SEG_LoginSaint,
};
