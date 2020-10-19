import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import GirlPicture from './../Static/1_blok_d.png';
import BoyPicture from './../Static/1_blok_m.png';

const useStyles = makeStyles((theme) => ({
  backgroundContent: {
    paddingTop: 79,
    paddingBottom: 98,
    backgroundColor: '#FDF4F5'
  },
  coolTitle: {
    color: '#000000',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '62px',
	lineHeight: '73px',
	letterSpacing: '-0.005em',
  },
  title: {
    color: '#000000',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '39px',
	lineHeight: '46px',
	letterSpacing: '-0.005em',
  },
  basicText: {
	color: '#000000',
	fontStyle: 'normal',
	fontSize: '32px',
	lineHeight: '46px',
	letterSpacing: '0.01em',
  }
}));

const StartingCard = () => {
	const classes = useStyles();
	return	(
		<Fade direction="right" in={true} mountOnEnter timeout={1500}>
			<Box className={classes.backgroundContent}>
			<Grid container direction="column-reverse">
				<Grid container item direction="row" justify="space-evenly" alignItems="center" style={{marginTop: -105}}>
					<Grid item sm={5}>
						<img src={BoyPicture} alt="some boi" align="left" style={{objectFit: "contain"}}/>
					</Grid>
					<Grid item sm={2}>
						<Typography className={classes.basicText} align="center">
							Я помогу тебе в этом,<br/>ведь креативными<br/>не рождаются,<br/>а<br/>становятся.
							{/*Не беда, всему можно научиться. Развивай креативное мышление вместе с Нами! (или со мной??) Здесь нужен еще какой-то тескт мб что-то о курсе.*/}

						</Typography>
					</Grid>
					<Grid item sm={5}>
						<img src={GirlPicture} alt="some girl" align="right" style={{objectFit: "contain"}}/>
					</Grid>
				</Grid>
				<Grid container item direction="column" justify="space-evenly" alignItems="center">
					<Grid item>
						<Typography className={classes.coolTitle} align="center">
							Хочешь мыслить креативно?{/*<u>нестандартно?</u>*/}
						</Typography>
					</Grid>
					{/*<Grid item>*/}
					{/*	<Typography className={classes.title} align="center">*/}
					{/*		Думаешь, у тебя недостаточно таланта для новых идей?*/}
					{/*	</Typography>*/}
					{/*</Grid>*/}
				</Grid>
			</Grid>
			</Box>
		</Fade>
		);
};

export default StartingCard;
