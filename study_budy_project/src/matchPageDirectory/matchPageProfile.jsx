import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import {
    ArrowBackIosSharp,
    ArrowForwardIosSharp
} from "@material-ui/icons";
import '../Header.css';
import {Grid, makeStyles, Tooltip, Typography} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {allStyles} from "../allStyles";

function MatchPageProfile(){
    const classes = makeStyles(theme => (allStyles(theme)))();

    return(
        <Grid container xs={12} className={classes.profileContainer} justifyContent={"space-evenly"}>
            <Grid container xs={12}>
                <Grid xs={3} item container justify={"flex-end"} alignItems={"center"}>
                    <Tooltip title={"Previous match"} placement={"left"}>
                        <Button>
                            <ArrowBackIosSharp className={classes.profileSideButtons}/>
                        </Button>
                    </Tooltip>
                </Grid>
                <Grid xs={6} item container justify={"center"}>
                <Tooltip title={"Click to view their profile"} placement={"top"}>
                    <Button>
                        <PersonIcon className={classes.profileLogo}/>
                    </Button>
                </Tooltip>
                    </Grid>
                <Grid xs={3} item container justify={"flex-start"} alignItems={"center"}>
                    <Tooltip title={"Next match"} placement={"right"}>
                        <Button>
                            <ArrowForwardIosSharp className={classes.profileSideButtons}/>
                        </Button>
                    </Tooltip>
                </Grid>
        </Grid>
            <Grid xs={12} item container justify={"center"}>
                <Typography className={classes.profileText} align={"center"}>
                    These people match your profile. Click the check to interact with them,
                    <br/>
                    or click the cross to delete the match and go to the next one.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default MatchPageProfile;