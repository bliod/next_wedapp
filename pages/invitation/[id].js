import { Pages } from '@material-ui/icons';
import React from 'react';
import Landing from '../../components/Landing';
import Main from '../../components/Main';

const Personal = ({ data }) => {
    return (
        <div>
            <Landing addresses={data.name}></Landing>
            <Main invitation={data.invitation}></Main>
        </div>
    );
}

export default Personal;

export async function getStaticProps({params}) {
    const extractId = params.id.split('_');
    const id = extractId[1];
    const response = await fetch(`${process.env.apiUrl}/people/${id}`)
    const data = await response.json()
    return {
        props: {data} // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.apiUrl}/people`);
    const people = await response.json();
    const paths = people.map((people) => {
        const wordsAtPeople = people.name.split(' ');
        const indentifier = `${wordsAtPeople[0].slice(0,1)}_${people.id}`;
        // console.log(indentifier)
        return {
            params: {id: indentifier}
        }
    });

    return {
        paths: [
            ...paths
        ],
        fallback: false
    }
}