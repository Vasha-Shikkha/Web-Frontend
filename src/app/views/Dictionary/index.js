import React, {useState} from "react";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import {getWordMeaning} from "../../axios/services/dictionary";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles";

const Dictionary = () => {
	const classes = styles();
	const [dictionarySearch, setDictionarySearch] = useState("");
	const [searchedWord, setSearchedWord] = useState("");
	const [searchRes, setSearchRes] = useState({});
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [wordNotFoundError, setWordNotFoundError] = useState(false);

	const searchWord = () => {
		console.log("searching for", dictionarySearch);
		if (!dictionarySearch || dictionarySearch.length === 0) return;

		setLoading(true);
		setWordNotFoundError(false);
		setSearchedWord(dictionarySearch);
		setSearchRes({});

		getWordMeaning(dictionarySearch, (err, axios_data) => {
			if (!err) {
				setSearchRes(axios_data);
				if (!open) setOpen(true);
			} else {
				setWordNotFoundError(true);
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

				{loading ? (
					<Loading container={classes.loadingContainer} />
				) : !open ? null : (
					<div className={`${classes.dictionaryContainer} ${classes.centererd}`}>
						<div className={classes.card}>
							<div className={classes.word}>{searchedWord ? searchedWord.toUpperCase() : ""}</div>
							{wordNotFoundError && (
								<div className={classes.meaning}>Word not found in the Dictionary :(</div>
							)}
							<div className={classes.meaning}>
								{searchRes.meaning && searchRes.meaning.length
									? searchRes.meaning.join(", ")
									: null}
							</div>
							{searchRes && searchRes.example ? (
								<div className={classes.exampleHead}>Example</div>
							) : null}
							<div className={classes.example}>
								{searchRes.example && searchRes.example.length
									? searchRes.example.join(", ")
									: null}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Dictionary;
