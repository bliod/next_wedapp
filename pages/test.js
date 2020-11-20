import React, { useEffect } from 'react';

const test = () => {

    useEffect( () => {
           testFetch() 
        //    console.log( testFetch())
    }, []);

    const testFetch = async () => {
        try {
            const response = await fetch(`${process.env.apiUrl}/people`)
            // const data = await response.json()
            // console.log(data)
            // return data
            // return dataclg   
            console.log(response)
            
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <h1>test</h1>
        </div>
    );
}

export default test;

