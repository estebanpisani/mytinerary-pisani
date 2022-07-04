import axios from "axios";

let url = 'http://localhost:4000/api/';

const activityActions = {

    getActivitiesByItinerary: (id) => {
        return async(dispatch, getState) => {
            try{
                const res = await axios.get(url+'/itineraries/'+id+'/activities');
                console.log(res);
                dispatch({
                    type:'GET_ACTIVITIES_BY_ITINERARY',
                    payload: res.data.response
                })
            } catch(error){
                console.log(error);
            }
        };
    }
}

export default activityActions;