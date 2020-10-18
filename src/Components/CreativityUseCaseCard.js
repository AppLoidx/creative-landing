import React, {useState, createRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GirlPicture from './../Static/5_blok.png';

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
        color: '#000000',
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '28px',
        letterSpacing: '0.01em',
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
            <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item sm={1} />
                    <Grid container item direction="column" sm={5} alignItems="center">
                        <Typography className={classes.coolTitle}>
                            История успеха креативности
                        </Typography>
                        <Typography className={classes.basicText}>
                            <br/>
                            Стив Возняк и Стив Джобс старались заинтересовать известные электронные фирмы своими разработками ПК: «Мы пришли в Atari, затем Hewlеtt Packard. Нам ответили, что нам не нужны такие как вы. Вы еще даже колледж не закончили. Но они махнули рукой, и решили создать свою компанию, где смогли воплотить свои идеи в реальность. Это была компания Apple Computers».
                        </Typography>
                    </Grid>
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
