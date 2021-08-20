import React from "react";
import {ClearRounded, CheckRounded} from "@material-ui/icons";
import '../Header.css';
import {Grid, makeStyles, Tooltip} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {allStyles} from "../allStyles";

function MatchPageFooter() {
    const classes = makeStyles(theme => (allStyles(theme)))();

    return (
        <Grid container className={classes.footerContainer} alignItems={"center"} justifyContent={"center"}>
            <Grid item container xs={6} justify={"center"}
                  style={{background: "mediumvioletred", borderRight: "2px solid black"}}>
                <Button style={{display: "block", width: "100%"}}>
                    <ClearRounded className={classes.footerCancelLogo}/>
                </Button>
            </Grid>
            <Grid item container xs={6} justify={"center"}
                  style={{background: "#00c853", borderLeft: "2px solid black"}}>
                <Button style={{display: "block", width: "100%"}}>
                    <CheckRounded className={classes.footerCheckLogo}/>
                </Button>
            </Grid>
        </Grid>
    )
}

export default MatchPageFooter;