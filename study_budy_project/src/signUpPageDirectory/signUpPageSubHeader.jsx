import React from "react";
import {ArrowBack, ArrowBackRounded, ForumRounded} from "@material-ui/icons";
import '../Header.css';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {allStyles} from "../allStyles";
import {Link} from "react-router-dom";

function SignUpPageSubHeader(){
    const classes = makeStyles(theme => (allStyles(theme)))();

    return(
        <Grid container xs={12} className={classes.subHeaderContainer}>
            <Grid xs={4} item container justify={"flex-start"}>
                <Link to={"/"}  style={{textDecoration:"none"}}>
                    <Button>
                        <Typography style={{color:"white", fontWeight: 600}}>
                            <ArrowBack className={classes.subHeaderLogos}/>
                            Back
                        </Typography>
                    </Button>
                </Link>
            </Grid>
            <Grid xs={4} item container justify={"center"} alignItems={"center"}>
                <Typography style={{fontWeight: 600, color: "cyan", fontSize: 40}}>
                    let's signup!
                </Typography>
            </Grid>
        </Grid>
    )
}

export default SignUpPageSubHeader;