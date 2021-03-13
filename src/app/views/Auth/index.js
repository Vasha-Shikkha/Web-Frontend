import React, {useState} from "react";
import {Redirect} from "react-router-dom";

import {TextField, IconButton, InputAdornment} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import {AuthConsumer} from "../../stateHandlers/authContext";

import {login, signup} from "../../axios/services/auth";
import authValidator from "../../validators/auth";
import styles from "./styles";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SignIn = (props) => {
	const classes = styles();
	const [showSignUp, setShowSignUp] = useState(false);
	const [field, setField] = useState({name: "", phone: "", password: "", showPassword: false});
	const [authenticated, setAuthenticated] = useState(props.isAuthenticated);
	const [errors, setErrors] = useState({});
	const [open, setOpen] = useState(false);
	const [msg, setMsg] = useState("");
	const [snackType, setSnackType] = useState(1);

	const handleChange = (name) => (event) => {
		setField({...field, [name]: event.target.value});
	};

	const toggleAuth = () => {
		setShowSignUp(!showSignUp);
		setField({name: "", phone: "", password: "", showPassword: false});
	};

	const handleSignin = () => {
		let data = {
			phone: field.phone,
			password: field.password,
		};

		const {errors, isValid} = authValidator.login(data);
		if (!isValid) {
			setErrors(errors);
			return;
		}

		login(data, (err, axios_data) => {
			if (err) {
				console.error("error in login", err);
				setSnackType(0);
				setMsg(err.msg);
			} else {
				props.login(axios_data.user, () => {
					setAuthenticated(true);
				});
			}

			setOpen(true);
		});
	};

	const handleSignUp = () => {
		let data = {
			name: field.name,
			phone: field.phone,
			password: field.password,
		};

		const {errors, isValid} = authValidator.signup(data);
		if (!isValid) {
			setErrors(errors);
			return;
		}

		signup(data, (err, axios_data) => {
			if (err) {
				console.error("error in signup", err);
				setMsg(err.msg);
				setSnackType(0);
				setErrors({});
			} else {
				setMsg("Registered Successfully!!!");
				setSnackType(1);
				setShowSignUp(false);
				setField({name: "", phone: "", password: "", showPassword: false});
			}

			setOpen(true);
		});
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	if (authenticated) return <Redirect to={"/home"} />;

	return (
		<div className={classes.root}>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={snackType ? "success" : "error"}>
					{msg}
				</Alert>
			</Snackbar>

			<div className={classes.upper}>
				<div className={classes.nav}>
					<div className={classes.logo}>
						Vasha<span className={classes.logoBold}>Shikkha</span>
					</div>
					<div className={classes.authBtnContainer}>
						<div
							className={showSignUp ? classes.activeAuth : classes.inactiveAuth}
							onClick={() => toggleAuth()}>
							Sign Up
						</div>

						<div
							style={{marginLeft: 25}}
							className={!showSignUp ? classes.activeAuth : classes.inactiveAuth}
							onClick={() => toggleAuth()}>
							Sign In
						</div>
					</div>
				</div>
				<div className={classes.fieldContainer}>
					{showSignUp && (
						<TextField
							required
							onChange={handleChange("name")}
							value={field.name}
							name="name"
							label="name"
							className={classes.txtField}
							error={errors.name ? true : false}
							helperText={errors.name ? errors.name : ""}
							type="text"
						/>
					)}
					<TextField
						required
						onChange={handleChange("phone")}
						value={field.phone}
						name="phone"
						label="phone"
						className={classes.txtField}
						error={errors.phone ? true : false}
						helperText={errors.phone ? errors.phone : ""}
						type="text"
					/>

					<TextField
						required
						className={classes.txtField}
						value={field.password}
						type={field.showPassword ? "text" : "password"}
						label="password"
						name="password"
						error={errors.password ? true : false}
						helperText={errors.password ? errors.password : ""}
						onChange={handleChange("password")}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										edge="end"
										aria-label="Toggle password visibility"
										onClick={() => setField({...field, showPassword: !field.showPassword})}>
										{field.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>

					<div className={classes.lnk} onClick={() => toggleAuth()}>
						{showSignUp ? "Already have an account?" : "Create new account"}
					</div>
				</div>
			</div>
			<div className={`${classes.lower} ${classes.centered}`}>
				<div
					className={`${classes.btn} ${classes.centered}`}
					onClick={() => {
						showSignUp ? handleSignUp() : handleSignin();
					}}>
					{showSignUp ? "Sign Up" : "Sign In"}
				</div>
			</div>
		</div>
	);
};

const ConsumerComponent = (props) => (
	<AuthConsumer>
		{({login, isAuthenticated}) => (
			<SignIn {...props} login={login} isAuthenticated={isAuthenticated} />
		)}
	</AuthConsumer>
);

export default ConsumerComponent;
