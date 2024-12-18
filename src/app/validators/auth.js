const checker = require("./checker");

module.exports.login = (data) => {
	let errors = {};

	if (checker.isEmpty(data.phone)) {
		errors.phone = "phone field is empty";
	}

	if (checker.isEmpty(data.password)) {
		errors.password = "password is required";
	}

	return {
		errors,
		isValid: checker.isEmpty(errors),
	};
};

module.exports.signup = (data) => {
	let errors = {};

	if (checker.isEmpty(data.name)) {
		errors.name = "name field is empty";
	}

	if (checker.isEmpty(data.phone)) {
		errors.phone = "phone field is empty";
	} else if (!checker.bangladeshiPhone(data.phone)) {
		errors.phone = "phone is not a valid Bangladeshi number";
	}

	if (checker.isEmpty(data.password)) {
		errors.password = "password is required";
	}

	return {
		errors,
		isValid: checker.isEmpty(errors),
	};
};
