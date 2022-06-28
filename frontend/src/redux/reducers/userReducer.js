const initialState = {
    users: [],
    userData: {},
    message: '',
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
            };

        case 'SIGN_UP':
            return {
                ...state,
                message: action.payload.message,
            };

        default:
            return state;
    }
}

export default userReducer;