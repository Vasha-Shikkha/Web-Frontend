import {getReqAuth, postReqAuth} from "../index";

const getAllExercises = (params, cb) => getReqAuth("/user/task/all", params, cb);

const updateExerciseStatus = (taskId, solvedStatus, cb) => {
	let data = {
		taskID: taskId,
		solved: solvedStatus,
	};

	postReqAuth("/user/attempt/update", data, "", cb);
};

export {getAllExercises, updateExerciseStatus};
