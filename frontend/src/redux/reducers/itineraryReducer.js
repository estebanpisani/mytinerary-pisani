const initialState = {
    itineraries: [],
     // Si lo llegara a necesitar.
    // filteredItineraries: [],
    itinerary: {}
};

const itineraryReducer = (state=initialState, action) => {
    console.log('Itinerary State:');
    console.log(state);
    switch (action.type) {
        case 'GET_ITINERARIES':
            return {
                ...state,
                itineraries: action.payload,
            };
        
        case 'GET_ITINERARY_BY_ID':
            return {
                ...state,
                itinerary: action.payload,
            }

        case 'GET_ITINERARIES_BY_CITY':
            return {
                ...state,
                itineraries: action.payload,
            }


        // Si llegara a necesitarlo:
        // case 'FILTER_ITINERARIES':
        //     let results = state.itineraries.filter(itinerary => itinerary.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()));
        //     return {
        //         ...state,
        //         filteredCities: results
        //     }
        default:
            return state;
    }
}

export default itineraryReducer;