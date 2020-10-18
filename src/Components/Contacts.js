import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Mari from './../Static/contact.png';

const useStyles = makeStyles((theme) => ({
  backgroundContent: {
    paddingTop: 98,
    paddingBottom: 98,
    backgroundColor: '#FDF4F5',
    height: 721
  },
  title: {
    color: '#000000',
	fontStyle: 'normal',
	fontWeight: '600',
	fontSize: '39px',
	lineHeight: '46px',
	letterSpacing: '-0.005em',
  },
  basicText: {
	color: '#000000',
	fontStyle: 'normal',
	fontSize: '24px',
	lineHeight: '28px',
	letterSpacing: '0.01em',
  },
  contactsField: {
  	borderColor: '#89A4D7',
  	borderRadius: 10,
  	borderWidth: 10,
  	margin: theme.spacing(10),
  	padding: theme.spacing(6),
  },
  formRoot :{
  	padding: theme.spacing(3),
  },
  formItem :{
  	margin: theme.spacing(2),
  },
  formSubmit :{
  	padding: theme.spacing(1),
  	marginTop: theme.spacing(4),
  	backgroundColor: '#89A4D7',
  },
}));

const Contacts = () => {
	const classes = useStyles();
	return	(
		<Box className={classes.backgroundContent}>
			<Grid container direction="row" justify="space-evenly" alignItems="center">
				<Grid container item direction="column" justify="flex-start" alignItems="center" sm={5} spacing={4}>
					<Grid item>
						<img src={Mari} alt="Masha" style={{objectFit: "contain"}}/>
					</Grid>
					<Grid item>
						<Typography className={classes.basicText}>
							О маше
						</Typography>
					</Grid>
				</Grid>
				<Grid item justify="space-evenly" alignItems="center" sm={2}>
					<Typography className={classes.basicText} align="center">
							Контакты
					</Typography>
				</Grid>
				<Grid item justify="space-evenly" alignItems="center" sm={5} style={{padding:0}}>
					<Paper variant="outlined" className={classes.contactsField}>
						<Typography variant="h6" className={classes.title} align="center">
							Присоединяйся к курсу креативного мышления прямо сейчас
						</Typography>
						<form className={classes.formRoot} noValidate autoComplete="off">
							<Grid container direction="column" justify="space-evenly" alignItems="center" align="center" className={classes.formRoot}>
								<TextField id="text-name" label="Как к вам обращаться?" fullWidth align="center" variant="outlined" className={classes.formItem} color="#89A4D7"/>
								<TextField id="text-email" label="Введите вашу почту" fullWidth align="center" variant="outlined" className={classes.formItem} color="#89A4D7"/>
								<Button variant="contained" size="large" className={classes.formSubmit}>Получить инсайт</Button>
							</Grid>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</Box>
		);
};

export default Contacts;