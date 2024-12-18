const showErr = (err, cb) => {
	if (err.response && err.response.status) {
		if (err.response.data && Object.keys(err.response.data).length)
			return cb(err.response.data, null);
		else if (err.response.status === 500) return cb({msg: "Server Error", code: 500}, null);
		else if (err.response.status === 404) return cb({msg: "Data Not found", code: 404}, null);
		else if (err.response.status === 401) {
			return cb({msg: "Unauthorized", code: 401}, null);
		}
	} else {
		console.log(err);
		cb({msg: "Unknown Error"}, null);
	}
};

export default showErr;
