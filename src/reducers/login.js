const defaultState = {
    isLogin: false
};

export default function(state=defaultState, action) {
    switch (action.type) {
        case 'CHANGE_ISLOGIN':
            return {
                ...state, 
                isLogin: action.payload
            }
        default: 
            return state;
    }
};

