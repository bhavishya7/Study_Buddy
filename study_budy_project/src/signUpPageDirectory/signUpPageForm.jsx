import React, {useState} from "react";
import {Form, Field} from "react-final-form";
import {Button, Grid, makeStyles, Tooltip} from "@material-ui/core";
import {allStyles} from "../allStyles";
import {AddBoxRounded} from "@material-ui/icons";
import {sendUserDB} from "../routes/signUpPageInfo";
import {useRecoilState} from "recoil";
import {setUserState} from "../recoil/selectors";
import axios from "axios";

function SignUpPageForm() {

    const [userAtomState, setUserAtomState] = useRecoilState(setUserState)
    const windowHeight = window.innerHeight - 216;
    const classes = makeStyles(theme => (allStyles(theme, {windowHeight})))();
    const showResults = values => {
        //console.log(typeof values)
        // window.alert(JSON.stringify(values, undefined, 2))
        // const userData = sendUserDB(values)
        axios.post(`http://localhost:5000/auth/addUser`, values).then((data) => {
            setUserAtomState(data.data)
        })
        // console.log("line 1", values)
        // setUserAtomState(values)
    }
    // console.log("test", userAtomState)
    const gradYearOptions = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].sort((a, b) => {
        return b - a
    });
    const timeOptions = ["Morning (6AM - 12PM)", "Afternoon (12PM - 4PM)", "Evening (4PM - 8PM)", "Night (9PM or later)"];
    const classesOptions = ["CS 252", "CS 400", "CS 540", "PSYCH 202", "HIST 101", "ART 100", "ANTHRO 104"];
    // const [userInformation, setUserInformation] = useState({});
    return (
        <Grid container xs={12} className={classes.signUpInfoContainer} justifyContent={"center"}>
            <Grid xs={12} item container justify={"center"} style={{fontSize: 40, fontWeight: 700}}>
                Please enter your information below
            </Grid>
            <Grid container xs={12} className={classes.formFields} justifyContent={"center"} alignItems={"flex-start"}>
                <Form onSubmit={showResults}>
                    {({handleSubmit}) => (<form onSubmit={handleSubmit}>
                            <Grid>
                                <label> Email </label>
                                <Field name={"email"} component={"input"} style={{fontSize: 30}}
                                       placeholder={"Email id"}/>
                            </Grid>
                            <Grid>
                                <label> First Name </label>
                                <Field name={"first_name"} component={"input"} style={{fontSize: 30}}
                                       placeholder={"First Name"}/>
                            </Grid>

                            <Grid>
                                <label> Last Name </label>
                                <Field name={"last_name"} component={"input"} style={{fontSize: 30}}
                                       placeholder={"Last Name"}/>
                            </Grid>

                            <Grid>
                                <label> Pronouns </label>
                                <Field name={"pronouns"} component={"input"} style={{fontSize: 30}}
                                       placeholder={"Enter Pronouns"}/>
                            </Grid>
                        <Grid>

                            <label> Major </label>
                            <Field name={"major"} component={"input"} placeholder={"Select Your Major"}
                                   style={{fontSize: 30}}>
                            </Field>
                        </Grid>
                            <Grid>
                                <label> Current Classes </label>
                                <Field name={"current_classes"} component={"select"} placeholder={"Select Classes"}
                                       style={{fontSize: 30}}>
                                    <option> Select Classes</option>
                                    {classesOptions.map(course => {
                                        return (
                                            <option>{course}</option>
                                        )
                                    })}
                                </Field>
                                <Tooltip title={"Add class"} placement={"right"}>
                                    <Button onClick={() => {
                                        return (
                                            <Field name={"current_classes"} component={"select"}
                                                   placeholder={"Select Classes"}
                                                   style={{fontSize: 30}}>
                                                <option> Select Classes</option>
                                                {classesOptions.map(course => {
                                                    return (
                                                        <option>{course}</option>
                                                    )
                                                })}
                                            </Field>
                                        )
                                    }}>
                                        <AddBoxRounded style={{fontSize: 35, color: "white",}}/>
                                    </Button>
                                </Tooltip>
                            </Grid>

                            <Grid>
                                <label> Graduation Year </label>
                                <Field name={"grad_year"} component={"select"} placeholder={"Select Year"}
                                       style={{fontSize: 30}}>
                                    <option> Select Year</option>
                                    {gradYearOptions.map(year => {
                                        return (
                                            <option>{year}</option>
                                        )
                                    })}
                                </Field>
                            </Grid>

                            <Grid>
                                <label> Preferred Time Of Study </label>
                                <Field name={"pref_time"} component={"select"} placeholder={"Select Time"}
                                       style={{fontSize: 30}}>
                                    <option> All times work for me</option>
                                    {timeOptions.map(time => {
                                        return (
                                            <option>{time}</option>
                                        )
                                    })}
                                </Field>
                            </Grid>

                            <Grid>
                                <label> Preferred Study Locations </label>
                                <Field name={"study_locations"} component={"input"} style={{fontSize: 30}}
                                       placeholder={"Library, Terrace, Dorm, etc."}/>
                            </Grid>
                            <Grid xs={12} item container justify={"center"} style={{paddingTop: 20}}>
                                <Button className={classes.welcomePageButtons} type={"submit"}>
                                    Submit
                                </Button>
                            </Grid>
                        </form>
                    )}
                </Form>
            </Grid>
        </Grid>
    )
}

export default SignUpPageForm;