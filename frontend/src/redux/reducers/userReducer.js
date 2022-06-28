const initialState = {
    users: [],
    userData: {},
    message: '',
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SIGN_UP':
            return {
                ...state,
                message: action.payload.message,
            };
        case 'LOGIN':
            if (action.payload.success) {
                return {
                    ...state,
                    userData: action.payload.response,
                    message: action.payload.message,
                };
            } else {
                return {
                    ...state,
                    message: action.payload.message,
                };
            }
        default:
            return state;
    }
}

export default userReducer;