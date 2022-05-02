import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';
import SetDisplayName from './SetDisplayName/SetDisplayName';
import LoadingScreen from '../../LoadingScreen';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
	let Auth = getAuth();
	const user = Auth.currentUser;
	const UserInterestsRef = doc(db, 'Users', user.email);
	let UserInterests = [];
	let FinalInterestList = [];
	const [RPosts, setRPosts] = useState(null);

	useEffect(() => {
		async function GetUserInterests() {
			await getDoc(UserInterestsRef).then((response) => {
				const UserData = response._document.data.value.mapValue.fields;
				const Interests = UserData.Interests.arrayValue.values;
				if (UserInterests.length != 0) {
					Interests.map((Interest) => {
						if (!UserInterests.includes(Interest)) {
							UserInterests.push(Interest.stringValue);
						}
					});
				}
			});
		}
		GetUserInterests().then(() => {
			if (UserInterests.length != 0) {
				UserInterests.map((Interest, i) => {
					while (i < 3) {
						axios
							.get(`https://www.reddit.com/r/${Interest}.json`)
							.then((response) => {
								let Posts = response.data.data.children;
								Posts.map((Post) => {
									FinalInterestList.push(Post);
								});
							});
						i++;
					}
					setRPosts(FinalInterestList);
				});
			}
		});
	}, []);

	return (
		<div align="center" id="DashboardContainer">
			{user.displayName === null ? <SetDisplayName /> : null}
			<h2>Dashboard</h2>
			{FinalInterestList === null ? (
				<LoadingScreen />
			) : (
				<>
					{FinalInterestList.map((RPost, i) => {
						return (
							<div className="RedditPost" key={i}>
								<span className="RedditPostHeader">
									<h4 className="Subreddit">
										{RPost.data.subreddit_name_prefixed}
									</h4>
									<h4 className="RedditAuthor">{RPost.data.author}</h4>
								</span>
								<h3 className="RedditText">{RPost.data.title}</h3>
							</div>
						);
					})}
				</>
			)}
		</div>
	);
}

export default Dashboard;
