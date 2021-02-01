import {
    FETCH_TRIPS,
    FETCH_EXPENSES,
    ADD_EXPENSE,
    ADD_TRIP,
} from './actionTypes';

export const loadTrips = () => {
    return {
        type: FETCH_TRIPS
    }
};

export const loadExpenses = trip => {
    return {
        type: FETCH_EXPENSES,
        trip
    }
};

export const addTrip = data => {
    return {
        type: ADD_TRIP,
        data,
    }
};

export const addExpense = data => {
    return {
        type: ADD_EXPENSE,
        data,
    }
};