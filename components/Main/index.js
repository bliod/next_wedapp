import React from 'react';
import styled from 'styled-components';
import { Container, Typography } from "@material-ui/core";
import RegularMap from '../GoogleMaps/GoogleMaps';


const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '280px' };
const mapElementStyle = { height: '100%' };



const Wrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 100%;
    text-align: center;
    background-image: url("/background1.jpg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    padding-top: 150px;
`;

const index = ({ invitation }) => {
    return (
        <Wrapper>
            <Container maxWidth="sm">
                <Typography variant="h5">{invitation.info}</Typography>
                <Typography variant="h5">{invitation.eventDate}</Typography>
                <Typography variant="h5">{invitation.where}</Typography>
                <Typography variant="h5">{invitation.info_2}</Typography>
                <Typography variant="h5">{invitation.info_3}</Typography>
                <RegularMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.googleApi}`}
                    loadingElement={<div style={loadingElementStyle} />}
                    containerElement={<div style={containerElementStyle} />}
                    mapElement={<div style={mapElementStyle} />}
                />
                
            </Container>
        </Wrapper>
    );
}

export default index;
