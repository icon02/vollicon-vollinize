import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const LightTheme = createMuiTheme({
	spacing: 6,
	palette: {
		type: "light",
		primary: {
			main: "#ff9800",
			contrastText: "#fafafa",
		},
		secondary: {
			main: "#1e88e5",
		},
		text: {
			secondary: "#757575",
			primary: "#424242",
		},
		divider: "#e0e0e0",
	},
	typography: {
		fontFamily: "Roboto",
	},
	props: {
		MuiButtonBase: {
			disableRipple: true,
		},
		MuiTooltip: {
			arrow: true,
		},
		MuiButton: {
			size: "small",
		},
		MuiButtonGroup: {
			size: "small",
		},
		MuiCheckbox: {
			size: "small",
		},
		MuiFab: {
			size: "small",
		},
		MuiFormControl: {
			margin: "dense",
			size: "small",
		},
		MuiFormHelperText: {
			margin: "dense",
		},
		MuiIconButton: {
			size: "small",
		},
		MuiInputBase: {
			margin: "dense",
		},
		MuiInputLabel: {
			margin: "dense",
		},
		MuiRadio: {
			size: "small",
		},
		MuiSwitch: {
			size: "small",
		},
		MuiTextField: {
			margin: "dense",
			size: "small",
		},
	},
	overrides: {
		MuiSwitch: {
			root: {
				width: 42,
				height: 26,
				padding: 0,
				margin: 8,
			},
			switchBase: {
				padding: 1,
				"&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
					transform: "translateX(16px)",
					color: "#fff",
					"& + $track": {
						opacity: 1,
						border: "none",
					},
				},
			},
			thumb: {
				width: 24,
				height: 24,
			},
			track: {
				borderRadius: 13,
				border: "1px solid #bdbdbd",
				backgroundColor: "#fafafa",
				opacity: 1,
				transition:
					"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
			},
		},
	},
});

export const DarkTheme = createMuiTheme({
	spacing: 6,
	palette: {
		type: "dark",
		primary: {
			main: "#ff9800",
			contrastText: "#212121",
		},
		secondary: {
			main: "#1e88e5",
		},
		text: {
			secondary: "#fafafa",
			primary: "#eeeeee",
		},
		background: {
			default: "#212121",
		},
		divider: "#e0e0e0",
	},
	typography: {
		fontFamily: "Roboto",
	},
	props: {
		MuiButtonBase: {
			disableRipple: true,
		},
		MuiTooltip: {
			arrow: true,
		},
		MuiButton: {
			size: "small",
		},
		MuiButtonGroup: {
			size: "small",
		},
		MuiCheckbox: {
			size: "small",
		},
		MuiFab: {
			size: "small",
		},
		MuiFormControl: {
			margin: "dense",
			size: "small",
		},
		MuiFormHelperText: {
			margin: "dense",
		},
		MuiIconButton: {
			size: "small",
		},
		MuiInputBase: {
			margin: "dense",
		},
		MuiInputLabel: {
			margin: "dense",
		},
		MuiRadio: {
			size: "small",
		},
		MuiSwitch: {
			size: "small",
		},
		MuiTextField: {
			margin: "dense",
			size: "small",
		},
	},
	overrides: {
		MuiSwitch: {
			root: {
				width: 42,
				height: 26,
				padding: 0,
				margin: 8,
			},
			switchBase: {
				padding: 1,
				"&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
					transform: "translateX(16px)",
					color: "#fff",
					"& + $track": {
						opacity: 1,
						border: "none",
					},
				},
			},
			thumb: {
				width: 24,
				height: 24,
			},
			track: {
				borderRadius: 13,
				border: "1px solid #bdbdbd",
				backgroundColor: "#fafafa",
				opacity: 1,
				transition:
					"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
			},
		},
	},
});
