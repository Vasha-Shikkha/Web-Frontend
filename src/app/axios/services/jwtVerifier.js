import {getReqAuth} from "../index";

const checkJWT = (cb) => getReqAuth("/user/verifyToken", {}, cb);

export {checkJWT};
