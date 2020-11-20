import React from 'react';
import { Button, makeStyles, Typography } from "@material-ui/core";
import Landing from '../../components/Landing';
import Main from '../../components/Main';


const useStyles = makeStyles({
    container: {
        border: "2px solid green",
        margin: "100px 100px",
        textAlign: "center",
        color: "gray"
    },
    inviteHeader: {
        padding: "10px"
        // fontWeight: 500,
        // border: "2px solid yellow",
        // fontSize: "5rem",

    }
})

const Personal = ({ data }) => {
    // const classes = useStyles();
    const invitation = data.invitation;
    // console.log(data)
    return (
        // <div className={classes.container}>
        //     <Typography className={classes.inviteHeader} variant="h1">
        //         {data.name}
        //     </Typography>
        //     <Typography className={classes.inviteHeader} variant="h5">
        //         Kviečiame jus pasidalyti mūsų džiaugsmu ir atvykti į mūsų sutuoktuves, kurios įvyks
        //     </Typography>
        //     <Typography variant="h4">{invitation.eventDate}</Typography>
        //     <Typography className={classes.inviteHeader} variant="h5">{invitation.where}</Typography>
        //     <Typography className={classes.inviteHeader} variant="h5">{invitation.info}</Typography>
        //     <Typography className={classes.inviteHeader} variant="h5">Butume dekingi uz dovanas kurios neduzta, nesiglamzo, neluzta ir yra laisvai konvertuojamos europos salyse.</Typography>
        // </div>\
        <div>
            <Landing addresses={data.name}></Landing>
            <Main invitation={data.invitation}></Main>
        </div>
    );
}




export default Personal;

export async function getStaticProps({ params }) {
        const response = await fetch(`${process.env.apiUrl}/people/${params.id}`)
        const data = await response.json()
    return {
        props: { data } // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
        const response = await fetch(`${process.env.apiUrl}/people`);
        const people = await response.json();
        // console.log(people);
        const paths= people.map((people) => {
            return {
                params: { id: people.id.toString() },
            }
        });  

    // console.log(paths)
    return {
        paths: [
          ...paths
        ],
        fallback: false
      }
}