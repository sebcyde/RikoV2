import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../StyleSheets/Search.css';
import LoadingScreen from '../../LoadingScreen';

function Search() {
	// const RedditPosts = [];
	const [Retrieving, setRetrieving] = useState(true);

	// useEffect(() => {
	// 	setRetrieving(true);
	// 	axios.get('https://www.reddit.com/r/all.json').then((response) => {
	// 		console.log(response.data.data.children);
	// 		response.map((Post) => {
	// 			RedditPosts.push(Post);
	// 			return RedditPosts;
	// 		});
	// 	});
	// 	setRetrieving(false);
	// }, []);

	useEffect(() => {
		setTimeout(() => {
			setRetrieving(false);
		}, 3000);
	}, []);

	return (
		<div id="SearchContainer">
			{Retrieving ? <LoadingScreen /> : <h2>Search</h2>}
		</div>
	);
}

export default Search;
