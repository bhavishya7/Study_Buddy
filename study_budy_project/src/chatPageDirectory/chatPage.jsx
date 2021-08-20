import React from "react";
import GlobalHeader from "../globalHeader";
import {Grid} from "@material-ui/core";
import ChatPageSubHeader from "./chatPageSubHeader";

function ChatPage(){
    return(
    <Grid container>
        <Grid xs={12}>
            <GlobalHeader/>
        </Grid>
        <Grid xs={12}>
            <ChatPageSubHeader/>
        </Grid>
    </Grid>
    )
}

export default ChatPage;