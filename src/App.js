import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import HomePage from "./pages/homePage/HomePage";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100vw",
		height: "100vh",
		backgroundColor: theme.palette.background.default,
	},
}));

function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<HomePage />
		</div>
	);
}

export default App;
