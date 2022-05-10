import React, { useEffect, useState, useRef, useReducer } from 'react';
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
	const [BTTButton, setBTTButton] = useState(false);
	const [Following, setFollowing] = useState(null);
	const [YN, setYN] = useState('Following');
	const FollowButton = useRef();
	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	const AddToLikes = () => {
		console.log('Follow Button Clicked');
		setFollowing(`Followed!`);
	};

	const Top = () => {
		document
			.getElementById('SearchContainer')
			.scrollTo({ top: 0, behavior: 'smooth' });
	};

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

	const Listener = () => {
		isInViewport(document.querySelector('#TextInput-25'))
			? setBTTButton(false)
			: setBTTButton(true);
	};

	function insertAt(array, index, elements) {
		array.splice(index, 0, elements);
	}

	useEffect(() => {
		if (!InterestResults == null || !InterestResults == '') {
			axios
				.get(`https://www.reddit.com/r/${InterestResults}.json`)
				.then((response) => {
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
							onClick={Top}
						/>
					);

					insertAt(
						AllPosts,
						11,
						<>
							{
								<Button
									ref={FollowButton}
									node="button"
									waves="light"
									onClick={(AddToLikes(), forceUpdate())}
									className={YN}
								>
									{Following}
								</Button>
							}
						</>
					);
				})
				.then(() => {
					setfirst(AllPosts);
					setFollowing(`Follow ${InterestResults}`);
					setRetrieving(false);
				});
		} else {
			setTimeout(() => {
				setRetrieving(false);
			}, 1000);
		}
	}, [InterestResults]);

	return (
		<div id="SearchContainer" align="center" onScroll={Listener}>
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
							{BTTButton ? <>{BTT}</> : null}
						</>
					)}
				</>
			)}
		</div>
	);
}

export default Search;
