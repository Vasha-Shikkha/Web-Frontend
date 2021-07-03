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
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ultricies mi, a suscipit massa dignissim ut. Fusce laoreet, leo at fermentum pharetra, massa nibh lobortis lacus, et blandit mauris elit in mauris. Cras eu sagittis velit. Class aptent",
		},
		{
			name: "Waqar Hassan Khan",
			image: WaqarImage,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ultricies mi, a suscipit massa dignissim ut. Fusce laoreet, leo at fermentum pharetra, massa nibh lobortis lacus, et blandit mauris elit in mauris. Cras eu sagittis velit. Class aptent",
		},
		{
			name: "Priyeta Saha",
			image: DummyImage,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ultricies mi, a suscipit massa dignissim ut. Fusce laoreet, leo at fermentum pharetra, massa nibh lobortis lacus, et blandit mauris elit in mauris. Cras eu sagittis velit. Class aptent",
		},
		{
			name: "Gourab Saha",
			image: DummyImage,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ultricies mi, a suscipit massa dignissim ut. Fusce laoreet, leo at fermentum pharetra, massa nibh lobortis lacus, et blandit mauris elit in mauris. Cras eu sagittis velit. Class aptent",
		},
	];

	const mentor = {
		name: "Dr. Anindya Iqbal",
		image: DummyImage,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ultricies mi, a suscipit massa dignissim ut. Fusce laoreet, leo at fermentum pharetra, massa nibh lobortis lacus, et blandit mauris elit in mauris. Cras eu sagittis velit. Class aptent",
	};

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<Navbar />
			</div>

			<div className={classes.contentContainer}>
				<div>
					<img src={DummyImage} alt="" className={classes.spondonImage} />
					<p className={classes.memoir}>
						<span className={classes.memoirHead1}>Dedicated to </span>
						<span className={classes.memoirHead2}>Shanjinur Islam Spondon</span>
						<br />
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ultricies mi, a
						suscipit massa dignissim ut. Fusce laoreet, leo at fermentum pharetra, massa nibh
						lobortis lacus, et blandit mauris elit in mauris. Cras eu sagittis velit. Class aptent
						taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
						commodo lorem vitae tincidunt finibus. Vivamus mattis fringilla ipsum, a lobortis est
						porttitor at.
					</p>
				</div>

				<div className={classes.teamHeading}>Our Team</div>
				<div className={classes.gridroot}>
					<Grid container justify="center">
						<Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
							<div className={classes.devCardContainer}>
								<AboutCard
									name={mentor.name}
									image={mentor.image}
									description={mentor.description}
									type="Mentor"
								/>
							</div>
						</Grid>
					</Grid>
				</div>

				<div className={`${classes.gridroot} ${classes.devContainer}`}>
					<Grid container spacing={5}>
						{devs &&
							devs.map((obj, idx) => (
								<Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
									<div key={idx} className={classes.devCardContainer}>
										<AboutCard
											name={obj.name}
											image={obj.image}
											description={obj.description}
											type="Team Member"
										/>
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
