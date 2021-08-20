import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import history from "./history";
import {ThemeProvider} from '@material-ui/core/styles';
import createTheme from '@material-ui/core/styles/createTheme';
import {RecoilRoot} from "recoil";
import {Router} from 'react-router-dom';
export const theme = createTheme({});

ReactDOM.render(
    <React.StrictMode>
        {/*<Provider store={store}>*/}
        <Router history={history}>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </RecoilRoot>
        </Router>
        {/*</Provider>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
