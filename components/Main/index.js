import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Paper, Grid } from "@material-ui/core";
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import RegularMap from '../GoogleMaps/GoogleMaps';


const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '280px' };
const mapElementStyle = { height: '100%' };



const Wrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    text-align: center;
    background-image: url("/background6.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 150px;
    @media (max-width: 1024px) {
        padding-top: 50px;  }
`;

const CustomTypography = styled(Typography)`
    text-shadow: 1px grey;
    font-weight: 300;
    color: #333;
    padding-bottom: 30px;    
    @media (max-width: 1024px) {
        ${props => props.smaller ? 'font-size: 1.1rem !important;' : 'font-size: 1.25rem !important;'};
        padding-bottom: 20px;  

        /* font-size: 1.25rem !important; */
  }
`;

const CustomGrid = styled(Grid)`
    /* padding-top: 10px !important; */
    display: flex;
    justify-content: center;
    svg {
        font-size: 3rem !important;
        @media (max-width: 1024px) {
        font-size: 2rem !important;
         }
    }
    ${CustomTypography} {
        padding-right: 20px;
        @media (max-width: 1024px) {
            padding-right: 10px;
         }
    }
`;

const index = ({ invitation }) => {
    return (
        // {document.}
        <Wrapper>
            <Container maxWidth="md">
                <CustomTypography variant="h3">{invitation.eventDate}</CustomTypography>
                <CustomTypography header variant="h4">{invitation.info}</CustomTypography>

                <CustomTypography variant="h4">{invitation.where}</CustomTypography>

                <CustomTypography variant="h4">{invitation.info_1}</CustomTypography>

                <CustomTypography variant="h4">{invitation.info_2}</CustomTypography>
                <CustomTypography variant="h4">{invitation.info_3}</CustomTypography>
                <CustomGrid>
                    <CustomTypography variant="h4">Dovanos idėja  </CustomTypography>
                    <MailOutlinedIcon />

                </CustomGrid>
                <CustomTypography smaller variant="h5">Apie dalyvavimą prašome pranešti iki <br></br> 2021 - 04 - 22</CustomTypography>

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
