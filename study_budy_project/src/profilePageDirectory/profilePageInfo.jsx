import React from "react";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {useRecoilValue} from "recoil";
import {userState} from "../recoil/atoms";
import {allStyles} from "../allStyles";
import {Label} from "@material-ui/icons";

export default function ProfilePageInfo(){
    const user = useRecoilValue(userState)
    const classes = makeStyles(theme => (allStyles(theme)))();
    return(
        <Grid container className={classes.profilePageInfoContainer} justify={"center"}>
            <Grid container xs={6} justify={"center"}>
                <Typography className={classes.profilePageInfoLabelText}>
                    Your Name: <br/>
                    Pronouns: <br/>
                    Major: <br/>
                    Current Classes: <br/>
                    Graduation Year: <br/>
                    Preferred Time: <br/>
                    Email: <br/>
                </Typography>
            </Grid>
            <Grid container xs={6} justify={"center"}>
                <Typography className={classes.profilePageInfoFieldText}>
                    {user.first_name} {user.last_name} <br/>
                    {user.pronouns} <br/>
                    {user.major} <br/>
                    {user.current_classes} <br/>
                    {user.grad_year} <br/>
                    {user.pref_time} <br/>
                    {user.email} <br/>
                </Typography>
            </Grid>
            <Grid container xs={12} justify={"center"} className={classes.profilePageInfoFieldText}>
                I like to study at {user.study_locations}
            </Grid>
        </Grid>
    )
}