const checker = require("./checker");

module.exports.login = (data) => {
	let errors = {};

	if (checker.isEmpty(data.phone)) {
		errors.phone = "phone field is empty";
	}

	if (checker.isEmpty(data.password)) {
		errors.password = "password is required";
	}

	console.log("inside validator", errors);

	return {
		errors,
		isValid: checker.isEmpty(errors),
	};
};
