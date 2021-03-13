import {getReqAuth} from "../index";

const getCommunicativeTopics = (cb) => getReqAuth("/user/topics", "", cb);

export {getCommunicativeTopics};
