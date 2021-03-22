import {getReqAuth} from "../../index";

const getSentenceMatching = (params, cb) => getReqAuth("/user/task/sentence_matching", params, cb);

export {getSentenceMatching};
