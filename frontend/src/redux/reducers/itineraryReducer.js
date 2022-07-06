const initialState = {
    itineraries: [],
    // itinerary: {}
};

const itineraryReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_ITINERARIES':
            return {
                ...state,
                itineraries: action.payload,
            };

        // case 'GET_ITINERARY_BY_ID':
        //     return {
        //         ...state,
        //         itinerary: action.payload,
        //     }

        case 'GET_ITINERARIES_BY_CITY':
            return {
                ...state,
                itineraries: action.payload,
            }
        // case 'GET_ITINERARIES_BY_CITY_WITH_ACTIVITIES':
        //     let activities = action.payload;
        //     let itinerary = [state.itineraries.find(itinerary = itinerary._id === activities[0].itinerary)];
        //     itinerary.activities = activities;
            
        //     state.itineraries
        //     return {
        //         ...state,
        //         itineraries: action.payload,
        //     }
        default:
            return state;
    }
}

export default itineraryReducer;