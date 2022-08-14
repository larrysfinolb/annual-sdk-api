const joi = require('joi');

const idUser = joi.string().email();
const password = joi.string();

const loginSaint = joi.object({
	idUser: idUser.required(),
	password: password.required(),
});

module.exports = {
	loginSaint,
};
