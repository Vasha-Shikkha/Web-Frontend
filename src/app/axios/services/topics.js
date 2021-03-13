import {postReqAuth} from "../index";

const getCommunicativeTopics = (cb) => postReqAuth("/user/topics", {}, "", cb);

export {getCommunicativeTopics};
