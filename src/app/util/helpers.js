module.exports.shuffle = (array) => {
	let currentIndex = array.length;
	let temporaryValue;
	let randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

module.exports.isJwtValid = (jwtTokenExpiryDate) => {
	if (!parseInt(jwtTokenExpiryDate)) return false;
	return Date.now() + 5 * 60 * 1000 < parseInt(jwtTokenExpiryDate);
};
