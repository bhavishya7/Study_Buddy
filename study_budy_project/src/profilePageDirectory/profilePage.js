import React from "react";
import GlobalHeader from "../globalHeader";
import {Grid} from "@material-ui/core";
import ProfilePageSubHeader from "./profilePageSubHeader";
import ProfilePageInfo from "./profilePageInfo";

function ProfilePage(){
    return(
        <Grid container>
            <Grid xs={12}>
                <GlobalHeader/>
            </Grid>
            <Grid xs={12}>
                <ProfilePageSubHeader/>
            </Grid>
            <Grid xs={12}>
                <ProfilePageInfo/>
            </Grid>
        </Grid>
    )
}

export default ProfilePage;