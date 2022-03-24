import React from "react";
import Navbar from "../../components/Navbar";
import AboutCard from "../../components/AboutCard";
import DummyImage from "../../assets/topics/birds.svg";
import WaqarImage from "../../assets/team/waqar.jpg";
import {Grid} from "@material-ui/core";
import styles from "./styles";

const About = () => {
	const classes = styles();
	const devs = [
		{
			name: "Nafis Tahmid",
			image: DummyImage,
			description:
				"Nafis graduated from CSE, BUET in February 2021. Currently, he is working as a software engineer in the IEIMS project under CSE, BUET. In this project, he worked on the admin panel and the mobile app.",
		},
		{
			name: "Waqar Hassan Khan",
			image: WaqarImage,
			description:
				"Waqar graduated from CSE, BUET in February 2021. Currently, he is working as a software engineer at Enosis Solutions, an offshore software company. In this project, he worked on the web front-end, the admin panel and managed deployments in AWS.",
		},
		{
			name: "Priyeta Saha",
			image: DummyImage,
			description:
				"Priyeta is a final year student at CSE, BUET, expecting to graduate in April 2022. Soon she will be joining Optimizely as a software engineering intern. In this project, she worked on the mobile app and a UI/UX designer.",
		},
		{
			name: "Gourab Saha",
			image: DummyImage,
			description:
				"Gourab is a final year student at CSE, BUET, expecting to graduate in April 2022. In this project, he worked on the backend and managed contents and volunteers.",
		},
	];

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<Navbar />
			</div>

			<div className={classes.contentContainer}>
				<div>
					<p className={classes.memoir}>
						<span className={classes.memoirHead1}>Dedicated to </span>
						<span className={classes.memoirHead2}>Shanjinur Islam Spondon</span>
						<br />
						<br />
						We dedicate this work to our friend Shanjinur Islam Spondon from CSE-15, BUET. His
						contribution to the mobile app will always be remembered. We request everyone to pray
						for his departed soul.
					</p>
				</div>

				<div className={classes.teamHeading}>Our Team</div>

				<div className={`${classes.gridroot} ${classes.devContainer}`}>
					<Grid container spacing={5}>
						{devs &&
							devs.map((obj, idx) => (
								<Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
									<div key={idx} className={classes.devCardContainer}>
										<AboutCard name={obj.name} image={obj.image} description={obj.description} />
									</div>
								</Grid>
							))}
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default About;
