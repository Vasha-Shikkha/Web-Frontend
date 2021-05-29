import {postReqAuth} from "../index";

const getFlashCards = (data, cb) => postReqAuth("/flashcard/find", data, "", cb);

export {getFlashCards};
