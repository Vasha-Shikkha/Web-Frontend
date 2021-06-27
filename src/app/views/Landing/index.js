import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {AuthConsumer} from "../../stateHandlers/authContext";
import Navbar from "../../components/Navbar";

import HomeImg from "../../assets/home_img.svg";
import {Grid} from "@material-ui/core";
import styles from "./styles";

const Landing = (props) => {
	const classes = styles();
	const history = useHistory();

	useEffect(() => {
		if (props.isAuthenticated) history.push("/home");
	}, [props.isAuthenticated, history]);
	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<Navbar />
			</div>
			<div className={classes.contentContainer}>
				<div className={classes.container}>
					<Grid container spacing={3} wrap="wrap-reverse">
						<Grid item xs={12} sm={6} md={7} lg={8} xl={8}>
							<div className={classes.gridItem}>
								<div className={classes.intro1Head}>Welcome Learner!</div>
								<div className={classes.intro1Description}>
									VashaShikkha English language learning app is a web and mobile application devised
									to facilitate learning English as a second language for children in Bangladesh.
									The app focuses specifically on the needs of children who do not enjoy as much
									privilege and exposure to the English-speaking world as children from the big
									cities and affluent households. Since the contents of the app have been adapted to
									the cultural context of Bangladesh and hence, children will find it easier to
									relate and connect to them. Moreover, the use of contextual images will ensure
									that children can learn English through fun and games.
								</div>
								<div onClick={() => history.push("/auth")} className={classes.getStarted}>
									Get Started
								</div>
							</div>
						</Grid>
						<Grid item xs={12} sm={6} md={5} lg={4} xl={4}>
							<div className={classes.gridItem}>
								<div className={classes.homeImgContainer}>
									<img src={HomeImg} alt="" className={classes.homeImg} />
								</div>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
};

const ConsumerComponent = (props) => (
	<AuthConsumer>
		{({isAuthenticated}) => <Landing {...props} isAuthenticated={isAuthenticated} />}
	</AuthConsumer>
);

export default ConsumerComponent;
