import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Preloader } from 'react-materialize';
import RingLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';
import '../StyleSheets/Search.css';

function Search() {
	const RedditPosts = [];
	const [Retrieving, setRetrieving] = useState(true);

	let Red = '#202020';

	const override = css`
		display: block;
		margin: 0 auto;
		border-color: red;
		align-self: center;
	`;

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

	return (
		<div id="SearchContainer">
			{/* {Retrieving ? (
				<ClipLoader color={Red} loading={Retrieving} size={150} />
			) : (
				{ RedditPosts }
			)} */}
			<RingLoader loading={Retrieving} size={150} id="RetrievingSpinner" />
		</div>
	);
}

export default Search;
