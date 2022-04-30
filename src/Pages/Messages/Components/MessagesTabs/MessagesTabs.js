import React from 'react';
import { Tabs, Tab, TextInput, Icon, Breadcrumb } from 'react-materialize';
import PrimaryChats from '../PrimaryChats/PrimaryChats';
import '../../Messages.css';

function MessagesTabs() {
	return (
		<div>
			{' '}
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

export default MessagesTabs;
