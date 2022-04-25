import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import '../../StyleSheets/Search.css';
import LoadingScreen from '../../LoadingScreen';
import Interests from '../Dashboard/Interests/Interests';
import { TextInput, Button, Icon } from 'react-materialize';

function Search() {
	const RedditPosts = [];
	const AllPosts = [];
	const [Retrieving, setRetrieving] = useState(true);
	const [first, setfirst] = useState();
	const [InterestResults, setInterestResults] = useState(null);
	const [BTT, setBTT] = useState(null);
	const SearchInput = useRef(null);

	useEffect(() => {
		if (!InterestResults == null || !InterestResults == '') {
			axios
				.get(`https://www.reddit.com/r/${InterestResults}.json`)
				.then((response) => {
					console.log(response.data.data.children);
					response.data.data.children.forEach((element) => {
						RedditPosts.push(element.data);
					});
				})
				.then(() => {
					RedditPosts.map((RPosts, i) => {
						AllPosts.push(
							<div className="RedditPost" key={i}>
								<span className="RedditPostHeader">
									<h4 className="RedditAuthor">{RPosts.author}</h4>
									<h4 className="Subreddit">
										{RPosts.subreddit_name_prefixed}
									</h4>
								</span>
								<span className="RedditPostContent">
									<h3 className="RedditText">{RPosts.title}</h3>
									{RPosts.thumbnail != 'self' &&
									RPosts.thumbnail != 'spoiler' ? (
										<img className="RedditImage" src={RPosts.thumbnail} />
									) : null}
								</span>
							</div>
						);
					});
					setBTT(
						<Button
							className="red"
							floating
							icon={<Icon>arrow_upward</Icon>}
							node="button"
							waves="light"
							id="BTTButton"
						/>
					);
					setfirst(AllPosts);
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
			}, 1000);
		}
	}, [InterestResults]);

	function isInViewport(element) {
		const rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	const Listener = window.addEventListener('scroll', () => {
		return isInViewport(document.querySelector('#TextInput-25'));
	});

	return (
		<div id="SearchContainer" align="center">
			{Retrieving ? (
				<LoadingScreen />
			) : (
				<>
					<div id="SearchTopLevelRow" ref={SearchInput}>
						<TextInput
							id="TextInput-25"
							placeholder="Search"
							onChange={(e) => {
								setInterestResults(e.target.value);
							}}
						/>
					</div>
					{InterestResults == null || InterestResults == '' ? (
						<Interests />
					) : (
						<>
							{first}
							{Listener ? null : <>{BTT}</>}
						</>
					)}
				</>
			)}
		</div>
	);
}

export default Search;
