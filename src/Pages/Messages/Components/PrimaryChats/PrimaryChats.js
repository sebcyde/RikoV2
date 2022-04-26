import React from 'react';
import { Row, Icon, CollectionItem, Col, Collection } from 'react-materialize';
import './PrimaryChats.css';

function PrimaryChats() {
	return (
		<div align="center" id="ChatsContainer">
			<Row>
				<Col m={6} s={12}>
					<Collection>
						<CollectionItem className="avatar">
							<img
								alt=""
								className="circle"
								src="https://materializecss.com/images/yuna.jpg"
							/>
							<div className="TextContainer">
								<span className="title">Name</span>

								<p>Name</p>
							</div>

							<a className="secondary-content" href="javascript:void(0)">
								<Icon>grade</Icon>
							</a>
						</CollectionItem>
						<CollectionItem className="avatar">
							<Icon className="circle">folder</Icon>
							<div className="TextContainer">
								<span className="title">Name</span>

								<p>Name</p>
							</div>
							<a className="secondary-content" href="javascript:void(0)">
								<Icon>grade</Icon>
							</a>
						</CollectionItem>
						<CollectionItem className="avatar">
							<Icon className="circle green">insert_chart</Icon>
							<div className="TextContainer">
								<span className="title">Name</span>

								<p>Name</p>
							</div>
							<a className="secondary-content" href="javascript:void(0)">
								<Icon>grade</Icon>
							</a>
						</CollectionItem>
						<CollectionItem className="avatar">
							<Icon className="circle red">play_arrow</Icon>
							<div className="TextContainer">
								<span className="title">Name</span>

								<p>Name</p>
							</div>
							<a className="secondary-content" href="javascript:void(0)">
								<Icon>grade</Icon>
							</a>
						</CollectionItem>
					</Collection>
				</Col>
			</Row>
		</div>
	);
}

export default PrimaryChats;
