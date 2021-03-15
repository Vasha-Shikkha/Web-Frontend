import {getReqAuth} from "../index";

const getCommunicativeTopics = (params, cb) => getReqAuth("/user/topics", params, cb);

export {getCommunicativeTopics};
