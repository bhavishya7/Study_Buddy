import React from "react";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {allStyles} from "../allStyles";
import {Link} from "react-router-dom";


function WelcomePage() {
    const classes = makeStyles(theme => (allStyles(theme)))();

    return (
        <Grid container className={classes.welcomePageContainer}>
            <Grid xs={12} item container justifyContent={"center"} alignItems={"center"}>
                <Typography className={classes.welcomePageText} align={"center"}>
                    Welcome to
                    <br/>
                    Study Buddy!
                </Typography>
            </Grid>
            <Grid xs={12} item container>
                <Grid item container xs justify={"center"} alignItems={"flex-start"}>
                    <Link to={"/match"} style={{textDecoration:"none"}}>
                        <Button className={classes.welcomePageButtons}>
                            LOG IN
                        </Button>
                    </Link>
                </Grid>
                <Grid item container xs justify={"center"} alignItems={"flex-start"}>
                    <Link to={"/signup"} style={{textDecoration:"none"}}>
                        <Button className={classes.welcomePageButtons}>
                            SIGN UP
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WelcomePage;