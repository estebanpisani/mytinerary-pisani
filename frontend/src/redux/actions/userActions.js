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
        localStorage.removeItem('Token');
        return async (dispatch, getState) => {
            
            dispatch({
                type: 'LOGOUT'
            })
        }
    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            
            await axios.get(url, {
                headers: { 'Authorization': 'Bearer ' + token }
            })
                .then(res => {
                    console.log(res)
                    if (res.data.success) {
                        dispatch({
                            type: 'LOGIN',
                            payload: res.data
                        })
                    } else {
                        localStorage.removeItem('Token');
                    }
                })
                .catch(error => {
                    if (error.response.status=== 401){
                        dispatch({
                            type:'LOGOUT'
                        });
                        localStorage.removeItem('Token');
                    }
                })







        }

    }

}

export default userActions;