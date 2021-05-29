import axios from "axios";
import React from "react";
import {Redirect} from "react-router";
import showErr from "./errorAxios";
import config from "../util/config";
import {isJwtValid} from "../util/helpers";

// used to send post request to private routes
export const postReqAuth = (route, data, param, cb) => {
	const token = localStorage.getItem("vasha_shikkha_jwtToken");
	let jwtTokenExpiryDate = localStorage.getItem("vasha_shikkha_jwtToken_expiresAt");

	// check if token exists
	// check if it valid
	if (!isJwtValid(jwtTokenExpiryDate) || !token) return <Redirect to="/auth" />;

	if (token) {
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		axios
			.post(config.BASE_API_URL + route + param, data)
			.then((res) => {
				cb(null, res.data);
			})
			.catch((err) => {
				showErr(err, cb);
			});
	} else {
		cb("Not authenticated", null);
	}
};

// used to send post request to normal routes
export const postReq = (route, data, param, cb, setAuth) => {
	axios
		.post(config.BASE_API_URL + route + param, data)
		.then((res) => {
			if (setAuth) {
				localStorage.setItem("vasha_shikkha_jwtToken", res.data.access_token);
				localStorage.setItem("vasha_shikkha_user", JSON.stringify(res.data.user));
				localStorage.setItem(
					"vasha_shikkha_jwtToken_expiresAt",
					new Date(res.data.expires_at).getTime()
				);
			}
			cb(null, res.data);
		})
		.catch((err) => {
			showErr(err, cb);
		});
};

// used to send get request to private routes
export const getReqAuth = (route, param, cb) => {
	const token = localStorage.getItem("vasha_shikkha_jwtToken");
	let jwtTokenExpiryDate = localStorage.getItem("vasha_shikkha_jwtToken_expiresAt");

	// check if token exists
	// check if it valid
	if (!isJwtValid(jwtTokenExpiryDate) || !token) return <Redirect to="/auth" />;

	if (token) {
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;

		axios
			.get(config.BASE_API_URL + route, {params: param})
			.then((res) => {
				cb(null, res.data);
			})
			.catch((err) => {
				showErr(err, cb);
			});
	} else {
		cb("Not authenticated", null);
	}
};

// used to send get request to normal routes
export const getReq = (route, param, cb) => {
	axios
		.get(config.BASE_API_URL + route, {params: param})
		.then((res) => {
			cb(null, res.data);
		})
		.catch((err) => {
			showErr(err, cb);
		});
};
