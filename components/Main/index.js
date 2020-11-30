import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Grid } from "@material-ui/core";
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';

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
        ${props => props.smaller ? 'font-size: 1.1rem !important; padding-top: 20px !important;' : 'font-size: 1.25rem !important;'};
        padding-bottom: 20px;  
  }
  
`;

const CustomGrid = styled(Grid)`
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

const AnoterTypo = styled(Typography)`
    font-family: 'Parisienne', cursive!important;
`;


const index = ({ invitation }) => {
    return (
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
                <AnoterTypo variant="h5">Karolis ir Aušra</AnoterTypo>
            </Container>
        </Wrapper>
    );
}

export default index;
