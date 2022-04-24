import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../StyleSheets/Search.css';
import LoadingScreen from '../../LoadingScreen';
import Interests from '../Dashboard/Interests/Interests';
import { TextInput } from 'react-materialize';

function Search() {
	const RedditPosts = [];
	const AllPosts = [];
	const [Retrieving, setRetrieving] = useState(true);
	const [first, setfirst] = useState();
	const [InterestResults, setInterestResults] = useState(null);

	useEffect(() => {
		if (InterestResults != null) {
			axios
				.get(`https://www.reddit.com/r/${InterestResults}.json`)
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
						RedditPosts.map(
							({ author, subreddit_name_prefixed, title, id }) => {
								<div className="Post" key={id}>
									<h3 className="Author">{author}</h3>
									<h4 className="Subreddit">{subreddit_name_prefixed}</h4>
									<p className="Text">{title}</p>
								</div>;
							}
						)
					);
				})
				.then(() => {
					setRetrieving(false);
					console.log(first);
					console.log(RedditPosts);
					console.log(AllPosts);
				});
		} else {
			setTimeout(() => {
				setRetrieving(false);
			}, 4000);
		}
	}, [Search]);

	return (
		<div id="SearchContainer" align="center">
			{Retrieving ? (
				<LoadingScreen />
			) : (
				<>
					<h2>Search</h2>
					<div id="SearchTopLevelRow">
						<p>Enter an interest of select from the ones below</p>
						<TextInput id="TextInput-25" placeholder="Search" />
					</div>
				</>
			)}
			{InterestResults ? <>{InterestResults}</> : <Interests />}
		</div>
	);
}

export default Search;
