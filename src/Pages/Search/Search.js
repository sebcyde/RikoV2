import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../StyleSheets/Search.css';
import LoadingScreen from '../../LoadingScreen';

function Search() {
	const RedditPosts = [];
	const AllPosts = [];
	const [Retrieving, setRetrieving] = useState(true);
	const [first, setfirst] = useState();

	useEffect(() => {
		axios
			.get('https://www.reddit.com/r/all.json')
			.then((response) => {
				// console.log(response.data.data.children);
				response.data.data.children.forEach((element) => {
					RedditPosts.push(element.data);
				});
			})
			.then(() => {
				RedditPosts.map((RPosts, i) => {
					AllPosts.push(
						<div div className="Post" key={i}>
							<h3 h3 className="Author">
								{RPosts.author}
							</h3>
							<h4 className="Subreddit">{RPosts.subreddit_name_prefixed}</h4>
							<p className="Text">{RPosts.title}</p>
						</div>
					);
				});
				setfirst(
					RedditPosts.map(({ author, subreddit_name_prefixed, title, id }) => {
						<div className="Post" key={id}>
							<h3 className="Author">{author}</h3>
							<h4 className="Subreddit">{subreddit_name_prefixed}</h4>
							<p className="Text">{title}</p>
						</div>;
					})
				);
			})
			.then(() => {
				setRetrieving(false);
				console.log(first);
				console.log(RedditPosts);
				console.log(AllPosts);
			});
	}, []);

	return (
		<div id="SearchContainer" align="center">
			{Retrieving ? <LoadingScreen /> : <h2>Search</h2>}
		</div>
	);
}

export default Search;
