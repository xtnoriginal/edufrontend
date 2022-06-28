
// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

// return the token from the session storage
export const getAccessToken = () => {
    return sessionStorage.getItem('access_token') || null;
}

// return true if access token is not equal to null
export const getAccessTokenAvailable = () => {

    let token = sessionStorage.getItem('access_token') || null;
    if(token == null){
        return false;
    }

    return true;
}

export const getEmail = () => {
    return sessionStorage.getItem('email') || null;
}


// remove the token and user from the session storage
export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

// set the token and user from the session storage
export const setUserSession = (access_token,refresh_token, user,email) => {
    sessionStorage.setItem('access_token', access_token);
    sessionStorage.setItem('refresh_token', access_token);
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('user', JSON.stringify(email));
}



