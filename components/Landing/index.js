import React from 'react';
import { Typography, makeStyles } from "@material-ui/core";
import "fontsource-parisienne";

const useStyles = makeStyles({
    wrapper : {
        height: "100vh",
        backgroundImage: "url('/backgroundWeddingApp.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        zIndex: "-1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    landingHeader: {
        color: "#f1f2f6",
        fontFamily: 'Parisienne',
        textShadow: "2px 2px 0 #7a7a7a",
        fontSize: "6rem",
        // transform: scale(2, 2);
    }
});

const index = ({ addresses }) => {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <Typography className={classes.landingHeader} variant="h1">
                {addresses}
            </Typography>

        </div>
    );
}

export default index;
