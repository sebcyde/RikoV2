import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../StyleSheets/Search.css';
import LoadingScreen from '../../LoadingScreen';

function Search() {
	const RedditPosts = [];
	const AllPosts = [];
	const [Retrieving, setRetrieving] = useState(true);

	useEffect(() => {
		axios
			.get('https://www.reddit.com/r/all.json')
			.then((response) => {
				console.log(response.data.data.children);
				response.data.data.children.forEach((element) => {
					RedditPosts.push(element.data);
				});
			})
			.then(
				RedditPosts.forEach((RPosts) => {
					console.log(RPosts);
					console.log(RPosts.author);
					console.log(RPosts.subreddit_name_prefixed);
					console.log(RPosts.title);
					AllPosts.push(
						<div className="Post">
							<h3 className="Author">{RPosts.author}</h3>
							<h4 className="Subreddit">{RPosts.subreddit_name_prefixed}</h4>
							<p className="Text">{RPosts.title}</p>
						</div>
					);
				})
			);
		console.log(RedditPosts);
		console.log(AllPosts);
		setRetrieving(false);
	}, []);

	return (
		<div id="SearchContainer">
			{Retrieving ? <LoadingScreen /> : <h2>Search</h2>}
		</div>
	);
}

export default Search;
