import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
	Paper,
	TextField,
	Button,
	FormControl,
	Typography,
	CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 0,
		maxWidth: 300,
		display: "flex",
		flexDirection: "column",
		padding: theme.spacing(3),
		"& > *": {
			marginTop: theme.spacing(1),
		},
		"& > *:first-child": {
			marginTop: 0,
		},
	},
}));

export default function LoginComponent(props) {
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoggingIn, setLoggingIn] = useState(false);

	function login() {
		setLoggingIn((isLoggingIn) => !isLoggingIn);
	}

	function passwordFieldOnKeyPress(e) {
		if (e.code === "Enter") {
			e.preventDefault();
			login();
		}
	}

	function onEmailChanged(e) {
		setEmail(e.target.value);
	}

	function onPasswordChanged(e) {
		setPassword(e.target.value);
	}

	return (
		<FormControl className={classes.root} {...props}>
			<Typography variant="h4" component="h1">
				Login
			</Typography>
			<TextField
				variant="outlined"
				label="Email"
				type="email"
				value={email}
				onChange={onEmailChanged}
			/>
			<TextField
				variant="outlined"
				label="Password"
				onKeyPress={passwordFieldOnKeyPress}
				type="password"
				value={password}
				onChange={onPasswordChanged}
			/>
			<Button variant="outlined" onClick={login}>
				{isLoggingIn ? (
					<CircularProgress color="primary" size={28} thickness={6} />
				) : (
					<Typography variant="subtitle1" color="primary">
						Log in
					</Typography>
				)}
			</Button>
		</FormControl>
	);
}
