import {getReqAuth} from "../../index";

const getFillInTheBlanks = (params, cb) => getReqAuth("/user/task/fill_in_the_blanks", params, cb);

export {getFillInTheBlanks};
