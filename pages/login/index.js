import React, { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import useInputState from '../../hooks/useInputState';
import Router from 'next/router';
import { loginUser } from '../../components/Auth';

const index = () => {
    const context = useContext(UserContext);

    const [indentifier, updateIndentifier, resetIndentifier] = useInputState("");
    const [password, updatePassword, resetPassword] = useInputState("");

    useEffect(() => {
        console.log("use effect login")
        if (context.isAuthenticated) {
            Router.push("/admin"); // redirect if you're already logged in
        }
    });

    const handleSubmit = (async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser(indentifier, password);
            context.updateUser(user)
        } catch (e) {
            console.log(e)
        }

        resetIndentifier();
        resetPassword();
    })
    const stylesForm = {
        display: "flex",
        flexFlow: "column",
        width: "300px"
    }
    const stylesContainer = {
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        margin: "400px 0"
    }
    return (
        <div style={stylesContainer}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={stylesForm}>
                <input value={indentifier} onChange={updateIndentifier} placeholder="email" required></input>
                <input type="password" value={password} onChange={updatePassword} placeholder="password" required></input>
                <button>Login</button>
                <p>Don't have account? <a href="/register">Register</a></p>
            </form>
        </div>
    );
}

export default index;

