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
    background-image: url("/background6.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 150px;
    @media (max-width: 1024px) {
        padding-top: 70px;  }
`;

const CustomTypography = styled(Typography)`
    /* text-shadow: 2px 1px grey; */
    font-weight: 300;
    color: #333;
    padding-bottom: 50px;    
    @media (max-width: 1024px) {
        font-size: ${props=>props.header?'1.75rem !important;': '1.25rem !important;'};
        padding-bottom: 20px;  
  }
`;

const index = ({ invitation }) => {
    return (
        // {document.}
        <Wrapper>
            <Container maxWidth="md">
                <CustomTypography header variant="h2">{invitation.info}</CustomTypography>
                <CustomTypography variant="h4">{invitation.eventDate}</CustomTypography>
                <CustomTypography variant="h4">{invitation.where}</CustomTypography>
                <CustomTypography variant="h4">{invitation.info_2}</CustomTypography>
                <CustomTypography variant="h4">{invitation.info_3}</CustomTypography>
                {/* <RegularMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.googleApi}`}
                    loadingElement={<div style={loadingElementStyle} />}
                    containerElement={<div style={containerElementStyle} />}
                    mapElement={<div style={mapElementStyle} />}
                /> */}
            </Container>
        </Wrapper>
    );
}

export default index;
