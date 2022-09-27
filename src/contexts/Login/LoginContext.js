import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContext = React.createContext();
export const LoginProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState();

    let history = useNavigate();

    async function handleLogin(payload) {
        await fetch(`http://localhost:1337/api/auth/local`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.user) {
                    setUserInfo(data.user);
                    setDataToLocalStorage({ ...data.user, jwt: data.jwt });
                    history('/');
                } else {
                    alert('Ko đúng mật khẩu');
                }
            })
            .catch((err) => {});
    }

    //Lưu vào local storage
    const setDataToLocalStorage = (data) => {
        window.localStorage.setItem('login', JSON.stringify(data));
    };

    const getDataFromLocalStorage = () => {
        const dataString = window.localStorage.getItem('login');
        const dataObject = JSON.parse(dataString);
        if (dataObject && dataObject.user) {
            setUserInfo(dataObject.user);
        }
    };

    useEffect(() => {
        getDataFromLocalStorage();
    }, []);
    return <LoginContext.Provider value={{ handleLogin, userInfo }}>{children}</LoginContext.Provider>;
};

export const useLogin = () => {
    return useContext(LoginContext);
};

export default LoginContext;
