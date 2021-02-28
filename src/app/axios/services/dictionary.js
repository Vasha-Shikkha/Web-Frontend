import {getReq} from "../index";

const getWordMeaning = (word, cb) => getReq("/dictionary", {word}, cb, true);

export {getWordMeaning};
