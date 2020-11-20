import Cookies from 'js-cookie';
import Router from 'next/router';

export const registerUser = (username, email, password) => {
    //prevent from runing on server
    if (typeof window === "undefined") {
        return;
    }

    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(`${process.env.apiUrl}/auth/local/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password }) // body data type must match "Content-Type" header
            });
            if (!res.ok) {
                throw new Error("Something went wrong")
            }
            const resObj = await res.json();
            Cookies.set("token", resObj.jwt);
            Router.push("/")
            resolve(resObj)
        } catch (e) {
            reject(e)
            console.log(e)
        }

    })
}
export const loginUser = async (user, psw) => {
    if (typeof window === "undefined") {
        return;
    }
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(`${process.env.apiUrl}/auth/local`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "identifier": user,
                    "password": psw
                }) // body data type must match "Content-Type" header
            });

            if (!res.ok) {
                throw new Error("Email or password incorrect")
            }
            const resObj = await res.json();
            Cookies.set("token", resObj.jwt);
            Router.push("/admin")
            resolve(resObj)
        } catch (e) {
            reject(e)
            console.log(e)
        }
    })
}
export const logout = () => {
    //remove token and user cookie
    Cookies.remove("token");
    delete window.__user;
    // sync logout between multiple windows
    window.localStorage.setItem("logout", Date.now());
    //redirect to the home page
    Router.push("/");
};

