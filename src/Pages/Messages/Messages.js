import React, { useState, useEffect } from 'react';
import { Tabs, Tab, TextInput, Icon, Breadcrumb } from 'react-materialize';
import Chatroom from './Components/Chatrooms/Chatroom';
import PrimaryChats from './Components/PrimaryChats/PrimaryChats';
import './Messages.css';

function Messages() {
	const [SearchTerm, setSearchTerm] = useState('');
	const [Chatting, setChatting] = useState(false);
	const [ToChat, setToChat] = useState(
		<>
			<Tabs className="tab-demo z-depth-1" scope="tabs-22" id="TabsContainer">
				<Tab
					active
					options={{
						duration: 300,
						onShow: null,
						responsiveThreshold: Infinity,
						swipeable: false,
					}}
					title="	Primary"
					className="Tab"
				>
					<PrimaryChats />
				</Tab>
				<Tab
					options={{
						duration: 300,
						onShow: null,
						responsiveThreshold: Infinity,
						swipeable: false,
					}}
					title="General"
					className="Tab"
				>
					General
				</Tab>
				<Tab
					options={{
						duration: 300,
						onShow: null,
						responsiveThreshold: Infinity,
						swipeable: false,
					}}
					title="Junk"
					className="Tab"
				>
					Requests
				</Tab>
			</Tabs>
		</>
	);

	return (
		<div id="MessagesContainer">
			{Chatting ? (
				<Breadcrumb className="teal" cols={12} id="BC">
					<div
						id="BreadCrumbDivider"
						onClick={() => {
							setChatting(false);
							setToChat(
								<>
									<>
										<Tabs
											className="tab-demo z-depth-1"
											scope="tabs-22"
											id="TabsContainer"
										>
											<Tab
												active
												options={{
													duration: 300,
													onShow: null,
													responsiveThreshold: Infinity,
													swipeable: false,
												}}
												title="	Primary"
												className="Tab"
											>
												<PrimaryChats />
											</Tab>
											<Tab
												options={{
													duration: 300,
													onShow: null,
													responsiveThreshold: Infinity,
													swipeable: false,
												}}
												title="General"
												className="Tab"
											>
												General
											</Tab>
											<Tab
												options={{
													duration: 300,
													onShow: null,
													responsiveThreshold: Infinity,
													swipeable: false,
												}}
												title="Junk"
												className="Tab"
											>
												Requests
											</Tab>
										</Tabs>
									</>
								</>
							);
						}}
					>
						<span id="BackArrow" className="material-symbols-outlined">
							arrow_back
						</span>
						<span id="BackText">Back</span>
					</div>
				</Breadcrumb>
			) : (
				<>
					<div id="MessagesTopLevelRow">
						<TextInput
							noLayout={true}
							id="TextInput-25"
							placeholder="Search"
							onChange={(e) => {
								setSearchTerm(e.target.value);
							}}
						/>
						<span
							className="material-symbols-outlined"
							onClick={() => {
								setChatting(true);
								setToChat(
									<>
										<Chatroom />
									</>
								);
							}}
						>
							open_in_new
						</span>
					</div>
				</>
			)}

			{ToChat}
		</div>
	);
}

export default Messages;
