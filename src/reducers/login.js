const defaultState = {
    isLogin: false,
    user: null
};

export default function(state=defaultState, action) {
    switch (action.type) {
        case 'CHANGE_ISLOGIN':
            return {
                ...state, 
                isLogin: action.payload
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'TO_LOGOUT':
            return {
                ...state,
                isLogin: action.payload,
                user: null
            }
        default: 
            return state;
    }
};

