const checkIfLogin = __ => {
    const loginState = localStorage.getItem("isLogin");

    return !!loginState;
}

export {
    checkIfLogin
}