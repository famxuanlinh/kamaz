const getUserDataFromLocalStorage = () => {
    const dataString = window.localStorage.getItem('login');
    const dataObject = JSON.parse(dataString);
    return dataObject;
};
export default getUserDataFromLocalStorage;
