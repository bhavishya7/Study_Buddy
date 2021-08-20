import React from "react";
import {Route, Switch} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import './App.css';
import MatchPage from "./matchPageDirectory/matchPage";
import ChatPage from "./chatPageDirectory/chatPage";
import WelcomePage from "./welcomePageDirectory/welcomePage";
import ProfilePage from "./profilePageDirectory/profilePage";
import SignUpPage from "./signUpPageDirectory/signUpPage";

function App() {
    return (
          <Grid container>
                <Switch>
                    <Route path={"/match"}>
                        <MatchPage/>
                    </Route>
                    <Route path={"/chat"}>
                        <ChatPage/>
                    </Route>
                    <Route path={"/profile"}>
                        <ProfilePage/>
                    </Route>
                    <Route path={"/signup"}>
                        <SignUpPage/>
                    </Route>
                    <Route path={"/"}>
                        <WelcomePage/>
                    </Route>
                </Switch>
          </Grid>
    );
}

export default App;
