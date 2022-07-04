const initialState = {
    activities: []
};

const activityReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_ACTIVITIES_BY_ITINERARY':
            let activities = action.payload;
            state.activities.push(activities);
            return {
                ...state,
                activities: state.activities,
            };
        default:
            return state;
    }
}

export default activityReducer;