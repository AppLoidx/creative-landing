import React, {useState, createRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GirlPicture from './../Static/2_blok.png';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  backgroundContent: {
    paddingTop: 50,
    backgroundColor: '#FDF4F5',
    height: 721,
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
	paddingTop: theme.spacing(17),
  },
  basicText: {
	flexGrow: 2,
	color: '#000000',
	fontStyle: 'normal',
	fontSize: '24px',
	lineHeight: '28px',
	letterSpacing: '0.01em',
	paddingTop: 75,
  }
}));

const CreativityWhatCard = () => {
	const classes = useStyles();
	const ref = createRef();
    const trigger = useScrollTrigger({ target: ref.current ? ref.current : undefined, disableHysteresis: true});
    console.log(ref.current);
    console.log(trigger);
	return	(
		<Box className={classes.backgroundContent} ref={ref}>
			<Grid container direction="row" justify="space-evenly">
				<Fade in={trigger} timeout={1800}>
					<Grid container item direction="column" sm={6} alignItems="center">
						<Typography className={classes.coolTitle}>
							Креативность это...
						</Typography>
						<Typography className={classes.basicText}>
							{/*-Список основных пунктов норм раскрывающий значение понятий.<br/><br/>*/}
							{/*-Сами “точки” для пунктов я сделаю отдельно<br/><br/>*/}
							{/*-Текст от Ромы<br/><br/>*/}
							-Полный отказ от стереотипных идей и мыслей<br/><br/>
							-Абсолютная гибкость и оригинальность мышления<br/><br/>
							-Решение любой проблемы неординарным способом<br/><br/>
						</Typography>
					</Grid>
				</Fade>
				{/*<Grid container direction="row" item sm={1} alignItems="flex-start">*/}
				{/*	<Grow in={trigger} timeout={3000}>*/}
				{/*		<Typography className={classes.title}>*/}
				{/*			А что такое креативность?*/}
				{/*		</Typography>*/}
				{/*	</Grow>*/}
				{/*</Grid>*/}
				<Grid item sm>
					<Fade in={trigger} timeout={1200}>
						<img src={GirlPicture} alt="some girl" style={{objectFit: "contain"}}/>
					</Fade>
				</Grid>
			</Grid>
		</Box>
		);
};

export default CreativityWhatCard;
