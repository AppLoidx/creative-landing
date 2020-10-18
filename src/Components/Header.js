import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    flexGrow: 1,
    backgroundColor: '#89A4D7',
    height: '119px',
  },
  title: {
    flexGrow: 1,
    color: '#000000',
	fontStyle: 'normal',
	fontWeight: '900',
	fontSize: '80px',
	lineHeight: '58px',
	letterSpacing: '0.25em',
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

const Header = () => {
	const classes = useStyles();
	return	(
		<Slide direction="down" in={true} timeout={1000} mountOnEnter>
			<Toolbar className={classes.toolBar}>
				<Typography variant="h6" className={classes.title}>
					Mari.SoftSkillsCoach
				</Typography>
				{/*<Typography variant="h6" className={classes.basicText}>*/}
				{/*	softskillcoach*/}
				{/*</Typography>*/}
			</Toolbar>
		</Slide>);
};

export default Header;
