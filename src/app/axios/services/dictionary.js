import {getReq} from "../index";

const getWordMeaning = (word, cb) => {
	cb(null, {
		word: "Abatement",
		meaning: ["অবসান", "কমে যাওয়া"],
		example: ["The storm continued without abatement"],
	});

	//getReq("/dictionary", {}, word, cb, true);
};

export {getWordMeaning};
