import { useEffect, useState } from "react";
import { BrowserRouter as Router,
	Route } from "react-router-dom";
import NewBlogg from "../blogg/New";

function Admin(props) {
	const user = props.user;
	const setUser = props.setUser;

	console.log(user)
	if(!user) {
		return (
			<div className="inner-main">
			<div className="main-content">
				Logga in
			</div>
		</div>
		)

	}
	return (
		<div className="inner-main">
			<div className="main-content">
				<Router>
					<Route exact path="/admin/test"><div>Test2</div></Route>
				</Router>
			</div>
		</div>
	);
}
	
export default Admin;