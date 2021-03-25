import {getReqAuth} from "../index";

const getAvailableExercises = (params, cb) => getReqAuth("/user/exercises", params, cb);

export {getAvailableExercises};
