import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {allStyles} from "./allStyles";

export default function GlobalHeader(){
    const classes = makeStyles(theme => (allStyles(theme)))();

    return(
        <Grid container>
            <Grid item xs={12} className={classes.topBanner}>
                <Grid item container justify={"center"}>
                    <Link to={"/"} style={{textDecoration:"none"}}>
                        <Button>
                            <Typography className={classes.headerText}>
                                Study Buddy!
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>

    )
}