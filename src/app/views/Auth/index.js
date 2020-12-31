import React, {useState} from "react";
import {Redirect} from "react-router-dom";

import {TextField, IconButton, InputAdornment} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

import {AuthConsumer} from "../../stateHandlers/authContext";

import {login} from "../../axios/services/auth";
import authValidator from "../../validators/auth";
import styles from "./styles";

const SignIn = (props) => {
	const classes = styles();
	const [showSignUp, setShowSignUp] = useState(false);
	const [field, setField] = useState({phone: "", password: "", showPassword: ""});
	const [authenticated, setAuthenticated] = useState(false);
	const [errors, setErrors] = useState({});

	const handleChange = (name) => (event) => {
		setField({...field, [name]: event.target.value});
	};

	const handleLogin = () => {
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
			if (err) console.error("error in login", err);
			else {
				props.login(axios_data.user);
				setAuthenticated(true);
			}
		});
	};

	if (authenticated) return <Redirect to={"/home"} />;

	return (
		<div className={classes.root}>
			<div className={classes.upper}>
				<div className={classes.nav}>
					<div className={classes.logo}>
						Vasha<span className={classes.logoBold}>Shikkha</span>
					</div>
					<div className={classes.authBtnContainer}>
						<div
							className={showSignUp ? classes.activeAuth : classes.inactiveAuth}
							onClick={() => setShowSignUp(true)}>
							Sign Up
						</div>

						<div
							style={{marginLeft: 25}}
							className={!showSignUp ? classes.activeAuth : classes.inactiveAuth}
							onClick={() => setShowSignUp(false)}>
							Sign In
						</div>
					</div>
				</div>
				<div className={classes.fieldContainer}></div>
			</div>
			<div className={classes.lower}></div>
			{/* <div className={`${classes.content} ${classes.centered}`}>
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
									onClick={() => setField({...field, showPassword: !field.showPassword})}
								>
									{field.showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>

				<div className={`${classes.btn} ${classes.centered}`} onClick={() => handleLogin()}>
					Sign In
				</div>
			</div> */}
		</div>
	);
};

const ConsumerComponent = (props) => (
	<AuthConsumer>{({login}) => <SignIn {...props} login={login} />}</AuthConsumer>
);

export default ConsumerComponent;
