import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { AppBar, Typography, Button, Dialog, Grid } from "@material-ui/core";

import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100vw",
		height: "100vh",
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
	},
	appBar: {
		position: "sticky",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		padding: theme.spacing(1),
	},
	content: {
		padding: theme.spacing(2),
	},
}));

export default function HomePage(props) {
	const classes = useStyles();
	const [showLoginDialog, setShowLoginDialog] = useState(false);

	function loginButtonOnClick() {
		setShowLoginDialog((showLoginDialog) => !showLoginDialog);
	}

	function hideLoginDialog() {
		setShowLoginDialog(false);
	}

	return (
		<div className={classes.root}>
			<Dialog open={showLoginDialog} onClose={hideLoginDialog}>
				<LoginComponent />
			</Dialog>
			<AppBar className={classes.appBar} elevation={1}>
				<Typography variant="h3" component="h1">
					Vollinizer
				</Typography>
				<Button
					variant="contained"
					color="secondary"
					onClick={loginButtonOnClick}
				>
					<Typography variant="subtitle1">Log in</Typography>
				</Button>
			</AppBar>
			<Grid container className={classes.content}>
				<Grid item xs={12} lg={4}>
					<RegisterComponent />
				</Grid>
				<Grid item xs={12} lg={8}>
					Other content
				</Grid>
			</Grid>
		</div>
	);
}
