import {getReqAuth} from "../../index";

const getJumbledSentence = (params, cb) =>
	getReqAuth("/user/task/fix_jumbled_sentence", params, cb);

export {getJumbledSentence};
