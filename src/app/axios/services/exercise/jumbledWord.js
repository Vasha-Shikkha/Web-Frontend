import {getReqAuth} from "../../index";

const getJumbledWord = (params, cb) => getReqAuth("/user/task/fix_jumbled_word", params, cb);

export {getJumbledWord};
