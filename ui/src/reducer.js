const initialState= {
    expenses: [],
    trips: [],
};


export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_EXPENSES_SUCCESS':
            console.log('success!!')
            return { ...state, expenses: action.data }
        case 'FETCH_TRIPS_SUCCESS':
            return { ...state, trips: action.data }
        case 'FETCH_EXPENSES_FAILURE':
        case 'FETCH_TRIPS_FAILURE':
        case 'ADD_EXPENSE_SUCCESS':
        case 'ADD_EXPENSE_FAILURE':
        case 'ADD_TRIP_SUCCESS':
        case 'ADD_TRIP_FAILURE':
        default:
            return { ...state }
    }
}
