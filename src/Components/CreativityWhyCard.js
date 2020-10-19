import React, {createRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';

import GirlPicture from './../Static/3_blok.png';

const useStyles = makeStyles((theme) => ({
    backgroundContent: {
        paddingTop: 50,
        backgroundColor: '#FDF4F5',
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
        paddingBottom: theme.spacing(80),
    },
    basicText: {
        color: '#000000',
        fontStyle: 'normal',
        fontSize: '24px',
        lineHeight: '28px',
        letterSpacing: '0.01em',
    }
}));

const CreativityWhyCard = () => {
    const classes = useStyles();
    const ref = createRef();
	const trigger = useScrollTrigger({ target: ref.current ? ref.current : undefined, disableHysteresis: true});
    console.log(ref.current);
    console.log(trigger);
    return (
        <Box className={classes.backgroundContent} ref={ref}>
            <Grid container direction="row" justify="flex-start" alignItems="center">
                <Grid item sm={4}>
					<Fade in={trigger} timeout={2000}>
						<img src={GirlPicture} alt="some girl" style={{paddingLeft: 70, objectFit: "contain"}}/>
					</Fade>
					{/*<Fade in={trigger} timeout={1200} mountOnEnter>*/}
                    {/*</Fade>*/}
                </Grid>
                <Grid item container sm={2} direction="column" alignItems="flex-start">
                    {/*<Grid item>*/}
                    {/*    <Grow in={trigger} timeout={3000} mountOnEnter>*/}
                    {/*        <Typography className={classes.title}>*/}
                    {/*            А зачем она нужна?*/}
                    {/*        </Typography>*/}
                    {/*    </Grow>*/}
                    {/*</Grid>*/}
                </Grid>
                <Grid item container sm={6} direction="column" alignItems="flex-start" justify="space-evenly">
                    <Grid item sm>
                        <Typography className={classes.coolTitle}>
                            Креативность нужна для...
                        </Typography>
                    </Grid>
                    <Grid item sm>
                        <Typography className={classes.basicText}>
                            <ul>
                                <li>создания великого</li>
                                <br/>
                                <li>нахождения оригинальных решений</li>
                                <br/>
                                <li>насыщения жизни красочными моментами</li>
                                <br/>
                                <li>выхода за рамки обыденного строя</li>
                                <br/>
                                <li>расширения собственного сознания</li>
                            </ul>
                            <br/><br/>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CreativityWhyCard;
