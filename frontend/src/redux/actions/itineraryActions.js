import axios from "axios";

let url = 'http://localhost:4000/api/';

const itineraryActions = {

    getItineraries: () => {
        return async(dispatch, getState) => {
            try{
                const res = await axios.get(url+'/itineraries');
                dispatch({
                    type:'GET_ITINERARIES',
                    payload: res.data.response.itineraries
                })
            } catch(error){
                console.log(error);
            }
        };
    },
    getItinerariesByCity: (id) => {
        return async(dispatch, getState) => {
            try{
                const res = await axios.get(url+'/cities/'+id+'/itineraries');
                dispatch({
                    type:'GET_ITINERARIES_BY_CITY',
                    payload: res.data.response
                })
            } catch(error){
                console.log(error);
            }
        };
    },
    getItineraryById: (id) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.get(url+'/itineraries/'+id);
                dispatch({
                    type: 'GET_ITINERARY_BY_ID',
                    payload: res.data.response.itinerary
                })
            } catch(error){
                console.log(error);
            }
        }
    }
    // Si lo llegara a necesitar.
    //, filterItineraries: (input) => {
    //     return (dispatch, getState) => {
    //         dispatch({
    //             type:'FILTER_ITINERARIES',
    //             payload: input
    //         })
    //     }
    // }

}

export default itineraryActions;