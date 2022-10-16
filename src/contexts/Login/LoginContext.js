import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '~/constants/env';
import getToken from '~/until/getToken';

const LoginContext = React.createContext();
export const LoginProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState();
    let history = useNavigate();

    async function handleLogin(payload) {
        await fetch(`${BASE_URL}/auth/local`, {
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

    async function handleRegister(payload2) {
        // console.log(payload2);
        fetch(`${BASE_URL}/auth/local/register`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload2),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data?.error) {
                    toast.error(data.error?.message || 'Something went wrong');
                } else if (data.user) {
                    setUserInfo(data.user);
                    setDataToLocalStorage({ ...data.user, jwt: data.jwt });
                    history('/');
                    toast.success('Xin chào!');
                }
            });
    }

    const handleUpdateCustomer = (payload1) => {
        console.log(payload1);
        fetch(`${BASE_URL}/users/me`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload1),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                const dataString = window.localStorage.getItem('login');
                const dataObject = JSON.parse(dataString);
                const newCustomer = {
                    ...dataObject,
                    ...res,
                };
                toast.success('Cập Nhật Thông Tin Thành Công');
                setUserInfo(newCustomer);

                setDataToLocalStorage(newCustomer);
            });
    };

    const handleUpdatePassword = (payload2) => {
        console.log(payload2);
        fetch(`${BASE_URL}/auth/change-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.jwt}`,
            },
            body: JSON.stringify(payload2),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.error) {
                    toast.error(data.error?.message || 'Mật khẩu bạn nhập không đúng');
                } else if (data.user) {
                    setUserInfo(data.user);
                    setDataToLocalStorage({ ...data.user, jwt: data.jwt });
                    history('/');
                    toast.success('Xin chào!');
                }
            });
    };

    const handleLogout = () => {
        setUserInfo(null);
        setDataToLocalStorage(null);
        history('/');
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

    return (
        <LoginContext.Provider
            value={{ handleLogin, handleUpdatePassword, handleRegister, userInfo, handleLogout, handleUpdateCustomer }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => {
    return useContext(LoginContext);
};

export default LoginContext;
