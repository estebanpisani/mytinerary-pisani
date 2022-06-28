import axios from "axios";

let url = 'http://localhost:4000/api/auth';

const userActions = {

    signUp: (userData) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(url + '/signup', userData);
                dispatch({
                    type:'SIGN_UP',
                    payload: res.data
                })
            } catch (error) {
                console.log(error);
            }
        };
    }

}

export default userActions;