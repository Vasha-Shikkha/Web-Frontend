import React, {useState} from "react";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import {getWordMeaning} from "../../axios/services/dictionary";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles";

const Dictionary = () => {
	const classes = styles();
	const [dictionarySearch, setDictionarySearch] = useState("");
	const [searchRes, setSearchRes] = useState({});
	const [loading, setLoading] = useState(false);

	const searchWord = () => {
		if (!dictionarySearch || dictionarySearch.length === 0) return;

		setLoading(true);
		getWordMeaning(dictionarySearch, (err, axios_data) => {
			console.log(err, axios_data);
			if (!err) {
				setSearchRes(axios_data);
			} else {
				setSearchRes({word: "word not found"});
			}

			setLoading(false);
		});
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			searchWord();
		}
	};

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<Navbar />
			</div>

			<div className={classes.contentContainer}>
				<div className={classes.searchContainer}>
					<SearchIcon
						className={classes.menuBtn}
						onClick={() => {
							searchWord();
						}}
					/>
					<input
						type="text"
						name="dictionaryText"
						placeholder="Search Meaning"
						autoFocus={false}
						className={classes.input}
						onKeyPress={handleKeyPress}
						onChange={(e) => setDictionarySearch(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Dictionary;
