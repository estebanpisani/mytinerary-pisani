import axios from "axios";

let url = 'http://localhost:4000/api/auth';

const userActions = {

    signUp: (userData) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(url + '/signup', userData);
                console.log(res);
                dispatch({
                    type: 'SIGN_UP',
                    payload: res.data
                })
            } catch (error) {
                console.log(error);
            }
        };
    },
    login: (userCredentials) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(url + '/login', userCredentials);
                console.log(res)
                if (res.data.success) {
                    localStorage.setItem('Token', res.data.response.token)
                }
                dispatch({
                    type: 'LOGIN',
                    payload: res.data
                })
            } catch (error) {
                console.log(error);
            }
        };
    },
    logout: () => {
        return async (dispatch, getState) => {
            localStorage.removeItem('token');
            dispatch({
                type: 'LOGOUT'
            })
        }
    }

}

export default userActions;