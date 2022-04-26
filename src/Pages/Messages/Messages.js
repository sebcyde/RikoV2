import React, { useState } from 'react';
import { Tabs, Tab, TextInput, Icon } from 'react-materialize';
import PrimaryChats from './Components/PrimaryChats/PrimaryChats';
import './Messages.css';

function Messages() {
	const [SearchTerm, setSearchTerm] = useState('');

	return (
		<div id="MessagesContainer">
			<div id="MessagesTopLevelRow">
				<TextInput
					noLayout="true"
					id="TextInput-25"
					placeholder="Search"
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
				/>
				<span class="material-symbols-outlined">open_in_new</span>
			</div>

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
		</div>
	);
}

export default Messages;
