import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginContext = React.createContext();
export const LoginProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState();

    let history = useNavigate();

    async function handleLogin(payload) {
        await fetch(`http://localhost:1337/api/auth/local`, {
            method: 'POST',
            credentials: 'same-origin',
            identifier: 'email',
            password: 'Password',
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
                    toast.success('Đăng Nhập Thành Công');
                } else {
                    toast.error('Email hoặc mật khẩu không đúng');
                }
            })
            .catch((err) => {});
    }
    const handleLogout = () => {
        setUserInfo(null);
        setDataToLocalStorage(null);
    };

    //Lưu vào local storage
    const setDataToLocalStorage = (data) => {
        window.localStorage.setItem('login', JSON.stringify(data));
    };

    const getDataFromLocalStorage = () => {
        const dataString = window.localStorage.getItem('login');
        const dataObject = JSON.parse(dataString);
        if (dataObject) {
            setUserInfo(dataObject);
        }
    };

    useEffect(() => {
        getDataFromLocalStorage();
    }, []);

    return <LoginContext.Provider value={{ handleLogin, userInfo, handleLogout }}>{children}</LoginContext.Provider>;
};

export const useLogin = () => {
    return useContext(LoginContext);
};

export default LoginContext;
