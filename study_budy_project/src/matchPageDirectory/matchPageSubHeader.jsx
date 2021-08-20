import React from "react";
import {AccountCircle, ForumRounded} from "@material-ui/icons";
import '../Header.css';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {allStyles} from "../allStyles";
import {Link} from "react-router-dom";


function MatchPageSubHeader(){
    const classes = makeStyles(theme => (allStyles(theme)))();

    return(
            <Grid container xs={12} className={classes.subHeaderContainer}>
                <Grid xs item container justify={"flex-start"}>
                    <Link to={"/profile"}  style={{textDecoration:"none"}}>
                        <Button>
                            <Typography style={{color:"white", fontWeight: 600}}>
                                <AccountCircle className={classes.subHeaderLogos}/>
                                Profile
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
                <Grid xs item container justify={"center"} alignItems={"center"}>
                        <Typography style={{fontWeight: 600, color: "cyan", fontSize: 40}}>
                            let's connect!
                        </Typography>
                </Grid>
                <Grid xs item container justify={"flex-end"}>
                    <Link to={"/chat"} style={{textDecoration:"none"}}>
                        <Button>
                            <Typography style={{color:"white", fontWeight: 600}}>
                                <ForumRounded className={classes.subHeaderLogos}/>
                                Chats
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
        </Grid>
    )
}

export default MatchPageSubHeader;