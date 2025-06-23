import axios from "axios";

let countriesAPI = process.env.COUNTRIES_API;

const dataActions = {
    getCountries: () => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(countriesAPI + '/all');
                dispatch({
                    type:'GET_COUNTRIES',
                    payload: res.data
                })
            } catch (error) {
                console.log(error);
            }
        };
    },
}
export default dataActions;