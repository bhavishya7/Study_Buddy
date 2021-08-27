import React from "react";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {useRecoilValue} from "recoil";
import {userState} from "../recoil/atoms";
import {allStyles} from "../allStyles";
import {Label} from "@material-ui/icons";

export default function ProfilePageInfo() {
    const {
        user, user: {
            first_name: firstName,
            last_name: lastName,
            pronouns,
            major,
            current_classes: currentClasses,
            grad_year: gradYear,
            pref_time: prefTime,
            email,
            study_locations: studyLocations
        }
    } = useRecoilValue(userState)
    const classes = makeStyles(theme => (allStyles(theme)))();
    return (
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
                    {firstName} {lastName} <br/>
                    {pronouns} <br/>
                    {major} <br/>
                    {currentClasses} <br/>
                    {gradYear} <br/>
                    {prefTime} <br/>
                    {email} <br/>
                </Typography>
            </Grid>
            <Grid container xs={12} justify={"center"} className={classes.profilePageInfoFieldText}>
                I like to study at {studyLocations}
            </Grid>
        </Grid>
    )
}