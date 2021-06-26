import {getReqAuth} from "../index";

const getWordMeaning = (word, cb) => getReqAuth("/dictionary", {word}, cb, true);

export {getWordMeaning};
