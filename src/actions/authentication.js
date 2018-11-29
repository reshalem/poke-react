export function login() {
    return {type: 'CHANGE_ISLOGIN', payload: true};
};

export function logout() {
    return {type: 'CHANGE_ISLOGIN', payload: false};
};