import React, {useContext, useEffect} from 'react';
import {registerUser} from '../../components/Auth';
import useInputState from '../../hooks/useInputState';
import UserContext from '../../contexts/UserContext';
import Router from 'next/router';
const index = () => {
    const [userName, updateUserName, resetUserName] = useInputState("");
    const [email, updateEmail, resetEmail] = useInputState("");
    const [password, updatePassword, resetPassword] = useInputState("");

    const context = useContext(UserContext);

    useEffect(() => {
        console.log("use effect register")
        if (context.isAuthenticated) {
            Router.push("/admin"); // redirect if you're already logged in
        }
    });

    const handleSubmit = (async(e) => {
        e.preventDefault();
        try{
            const user = await registerUser(userName,email,password);
            context.updateUser(user)
        }catch(e){
            console.log(e)
        }
       
        resetUserName();
        resetEmail();
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
            <h1>Register</h1>
            <form onSubmit = {handleSubmit} style={stylesForm}>
                <input placeholder="username" value={userName} onChange={updateUserName} required></input>
                <input type="email" value={email} onChange={updateEmail} placeholder="example@gmail.com" required></input>
                <input type="password" value={password} onChange={updatePassword} placeholder="password" required></input>
                <button>Register</button>
            </form>
        </div>
    );
}

export default index;
