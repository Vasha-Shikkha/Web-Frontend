import {getReqAuth} from "../../index";

const getMCQ = (params, cb) => getReqAuth("/user/task/mcq", params, cb);

export {getMCQ};
