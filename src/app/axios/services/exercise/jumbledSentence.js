import {getReqAuth} from "../../index";

const getJumbledSentence = (params, cb) => {
	//getReqAuth("/user/task/fix_jumbled_word", params, cb);
	let data = [
		{
			paragraph: "a cow",
			chunks: ["the cow,", "eats grass.", "and runs ", "through the", "meadow"],
			taskDetail: {},
		},

		{
			chunks: ["the buffalo,", "eats grass.", "and runs ", "through the", "meadow"],
			taskDetail: {},
		},
	];
	cb(null, data);
};

export {getJumbledSentence};
