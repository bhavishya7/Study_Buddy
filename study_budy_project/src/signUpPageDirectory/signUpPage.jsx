import React from "react";
import GlobalHeader from "../globalHeader";
import {Grid} from "@material-ui/core";
import SignUpPageSubHeader from "./signUpPageSubHeader";
import SignUpPageForm from "./signUpPageForm";

function SignUpPage(){
    return(
        <Grid container>
            <Grid xs={12}>
                <GlobalHeader/>
            </Grid>
            <Grid xs={12}>
                <SignUpPageSubHeader/>
            </Grid>
            <Grid xs={12}>
                <SignUpPageForm/>
            </Grid>
        </Grid>
    )
}

export default SignUpPage;