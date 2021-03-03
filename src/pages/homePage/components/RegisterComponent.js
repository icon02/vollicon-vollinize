import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
	TextField,
	Button,
	Typography,
	FormControl,
	Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {},
	textField: {
		width: "100%",
	},
	textFieldGrid: {
		paddingBottom: theme.spacing(2),
	},
}));

export default function RegisterComponent(props) {
	const classes = useStyles();

	const MyTextField = (props) => (
		<TextField className={classes.textField} {...props} />
	);

	return (
		<FormControl className={classes.root}>
			<Grid container className={classes.textFieldGrid}>
				<Grid item xs={12} sm={7}>
					<MyTextField label="Organisation Name" />
				</Grid>
				<Grid item xs={12} sm={5}>
					<MyTextField label="ZVR" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<MyTextField label="Tel. Nr." />
				</Grid>
				<Grid item xs={12} sm={6} lg={6}>
					<MyTextField label="Email" type="email" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<MyTextField label="Password" type="password" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<MyTextField label="Repeat Password" type="password" />
				</Grid>

				<Grid item xs={12} lg={6}>
					<MyTextField label="Street" />
				</Grid>
				<Grid item xs={4} lg={2}>
					<MyTextField label="Street-No." />
				</Grid>
				<Grid item xs={4} lg={2}>
					<MyTextField label="Floor." />
				</Grid>
				<Grid item xs={4} lg={2}>
					<MyTextField label="Door-No." />
				</Grid>
				<Grid item xs={12} sm={4}>
					<MyTextField label="Postal Code" />
				</Grid>
				<Grid item xs={12} sm={8}>
					<MyTextField label="City" />
				</Grid>
				<Grid item xs={12} sm={8}>
					<MyTextField label="Country" value="Österreich" disabled />
				</Grid>
			</Grid>
			<Button variant="outlined" color="primary">
				<Typography variant="subtitle1">Register</Typography>
			</Button>
		</FormControl>
	);
}
