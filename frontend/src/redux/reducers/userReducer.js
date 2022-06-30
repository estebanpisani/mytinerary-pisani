const initialState = {
    users: [],
    userData: {},
    errors: [],
    message: ''
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SIGN_UP':
            if (action.payload.success) {
                return {
                    ...state,
                    message: action.payload.message,
                    errors: []
                };
            } else {
                return {
                    ...state,
                    errors: action.payload.message,
                    message: ''
                };
            }
        case 'LOGIN':
            if (action.payload.success) {
                return {
                    ...state,
                    userData: action.payload.response,
                    message: action.payload.message,
                    errors: []
                };
            } else {
                return {
                    ...state,
                    errors: action.payload.message,
                    message: ''
                };
            }
        default:
            return state;
    }
}

export default userReducer;