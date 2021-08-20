import React from "react";
import {Grid} from "@material-ui/core";
import MatchPageSubHeader from "./matchPageSubHeader.jsx";
import MatchPageFooter from "./matchPageFooter.jsx";
import GlobalHeader from "../globalHeader";
import MatchPageProfile from "./matchPageProfile";

function MatchPage() {

    return (
        <Grid container>
            <Grid xs={12}>
                <GlobalHeader/>
            </Grid>
            <Grid item xs={12}>
                <MatchPageSubHeader/>
            </Grid>
            <Grid item xs={12}>
                <MatchPageProfile/>
            </Grid>
            <Grid item xs={12}>
                <MatchPageFooter/>
            </Grid>
        </Grid>
    );
}

export default MatchPage;
