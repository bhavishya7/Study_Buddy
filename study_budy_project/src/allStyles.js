const allStyles = (theme, props) => ({
    welcomePageContainer: {
        background: "#1a237e",
        width: "100%",
        height: "100vh",
        minHeight: "100%"
    },
    welcomePageText: {
        color: "white",
        display: "flex",
        fontSize: 100,
        fontWeight: 800,
    },
    welcomePageButtons: {
        color: "white",
        background: "royalblue",
        width: 150,
        height: 75,
        fontSize: 22,
        fontWeight: 700
    },
    topBanner: {
        color: "white",
        background: "#00b0ff",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "4px solid black",
        height: 100,
    },
    headerText: {
        color: "white",
        fontWeight: 600,
        fontSize: 54,
    },
    subHeaderContainer: {
        paddingTop: 10,
        background: "#1a237e",
        //borderBottom: "2px solid black",
    },
    profileContainer: {
        paddingTop: 20,
        background: "#1a237e",
        paddingBottom: 15,
    },
    footerCheckLogo: {
        color: "white",
        width: 200,
        height: 200,
        paddingLeft: 20,
    },
    footerCancelLogo: {
        color: "white",
        width: 250,
        height: 200,
        paddingRight: 20,
    },
    footerContainer: {
        borderTop: "4px solid black",
        display: "flex",
    },
    profileLogo: {
        color: "orange",
        background: "lightgrey",
        justifyContent: "space-between",
        display: "flex",
        width: 502,
        height: 502,
    },
    profileSideButtons: {
        width: 100,
        height: 100,
        color: "white",
    },
    profileText: {
        color: "white",
        fontSize: 15,
    },
    subHeaderLogos: {
        color: "orange",
        justifyContent: "space-between",
        display: "flex",
        width: 70,
        height: 70,
    },
    formFields: {
        color: "white",
        fontWeight: 600,
        fontSize: 40,
        size: 50,
    },
    signUpInfoContainer: {
        paddingTop: 20,
        background: "#1a237e",
        paddingBottom: 15,
        minHeight: props?.windowHeight,
    },
    signUpSubmitButton: {
        fontSize: 30,
        fontWeight: 600,
        color: "white",
        background: "orange"
    },
    profilePageInfoContainer: {
        paddingTop: 20,
        background: "#1a237e",
        paddingBottom: 15,
        minHeight: "100vh",
    },
    profilePageInfoLabelText: {
        color: "white",
        fontWeight: 600,
        fontSize: 40,
    },
    profilePageInfoFieldText: {
        fontWeight: 600,
        fontSize: 40,
        textDecoration: "underline",
        //textDecorationColor: "white",
    },


    //TODO - Try to make one style for all subHeader logos
})

export {allStyles}