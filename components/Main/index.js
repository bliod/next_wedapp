import React from 'react';
import styles from './styles.module.scss'
import { Typography, makeStyles } from "@material-ui/core";
import RegularMap from '../GoogleMaps/GoogleMaps';


const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '280px' };
const mapElementStyle = { height: '100%' };


const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        flexFlow: "column wrap",
        color: "#2f3542",
        textAlign: "center",
        backgroundImage: "url('/backgroundMain.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        zIndex: "-1",
        padding: "200px 200px"
    },
    headerMain: {
        paddingBottom: "40px"
    },
    header: {
        padding: "10px"
    },
    date:{
        paddingBottom: "10px",
    }
});

const index = ({ invitation }) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <Typography className={classes.headerMain} variant="h4">
                Kviečiame jus pasidalinti mūsų džiaugsmu ir atvykti į mūsų sutuoktuves, kurios įvyks
            </Typography>
            <Typography className={classes.date} variant="h4">{invitation.eventDate}</Typography>
            <Typography className={classes.header} variant="h5">{invitation.where}</Typography>
            <RegularMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.googleApi}`}
                loadingElement={<div style={loadingElementStyle} />}
                containerElement={<div style={containerElementStyle} />}
                mapElement={<div style={mapElementStyle} />}
            />
            <Typography className={classes.header} variant="h5">{invitation.info}</Typography>
            <Typography className={classes.header} variant="h5">Butume dekingi uz dovanas kurios neduzta, nesiglamzo, neluzta ir yra laisvai konvertuojamos europos salyse.</Typography>
            <Typography className={classes.header} variant="h5">Vietoje gėlių atvežkite ką norėtumete paaukoti gyvūnų prieglaudai pvz.: maisto, katėm kraiko, žaislų.</Typography>
        </div>
    );
}

export default index;
