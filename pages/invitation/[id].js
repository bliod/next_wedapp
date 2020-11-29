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