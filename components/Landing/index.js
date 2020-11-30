import React from 'react';
import styled from 'styled-components';
import { Typography } from "@material-ui/core";

const LandingWrapper = styled.div`
    height: 100vh;
    background-image: url("/backgroundWeddingApp.jpg");
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LandingHeader = styled(Typography)`
    color: #f1f2f6;
    font-family: 'Parisienne', cursive !important;
    text-shadow: 2px 2px 0 #7a7a7a;
    font-size: 6rem !important;
    @media (max-width: 600px) {
        font-size: 3rem !important;
  }
`;

const index = ({ addresses }) => {
    return (
        <LandingWrapper>
            <LandingHeader>
                {addresses}
            </LandingHeader>
        </LandingWrapper>
    );
}

export default index;
