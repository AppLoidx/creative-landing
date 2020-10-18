import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    backgroundColor: '#89A4D7',
    height: '119px',
  },
  basicText: {
    flexGrow: 7,
    color: '#000000',
	fontStyle: 'normal',
	fontWeight: '900',
	fontSize: '50px',
	lineHeight: '58px',
	letterSpacing: '0.25em',
  },
}));

const Footer = () => {
	const classes = useStyles();
	return	(
		<Toolbar className={classes.toolBar}>
			<Typography className={classes.basicText} align="center">
				копирайт
			</Typography>
		</Toolbar>
	);
};

export default Footer;