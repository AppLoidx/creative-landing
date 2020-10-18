import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';


function App() {
	const theme = createMuiTheme({
  typography: {
    fontFamily: [
    	'Alegreya Sans',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
    ].join(','),
  },
});
  return (
  	<ThemeProvider theme={theme}>
  		<Header/>
		<Content/>
		<Footer/>
  	</ThemeProvider>
  	);
}

export default App;
