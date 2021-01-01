import {postReq} from "../index";

const login = (data, cb) => postReq("/user/login", data, "", cb, true);
const signup = (data, cb) => postReq("/user/register", data, "", cb, false);

export {login, signup};
