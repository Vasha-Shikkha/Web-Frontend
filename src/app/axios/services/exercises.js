import {getReqAuth} from "../index";

const getAllExercises = (params, cb) => getReqAuth("/user/task/all", params, cb);

export {getAllExercises};
