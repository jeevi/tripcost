import { put, call, takeLatest } from 'redux-saga/effects'
import {
    getExpenses,
    getTrips,
    postExpense,
    postTrip,
} from './services';
import {
    FETCH_EXPENSES,
    FETCH_TRIPS,
    ADD_EXPENSE,
    ADD_TRIP,
} from './actions/actionTypes';


function* fetchExpenses(action) {
    try {
        console.log(action, 'fetch expenses')
        const { expenses } = yield call(getExpenses, action.trip);
        yield put({ type: 'FETCH_EXPENSES_SUCCESS', data: expenses });
    } catch (error) {
        yield put({ type: 'FETCH_EXPENSES_FAILURE', error });
    }
};

function* fetchTrips() {
    try {
        const { trips } = yield call(getTrips);
        yield put({ type: 'FETCH_TRIPS_SUCCESS', data: trips });
    } catch (error) {
        yield put({ type: 'FETCH_TRIPS_FAILURE', error });
    }
};

function* addExpense(action) {
    try {
        const response = yield call(postExpense, { ...action.data });
        if (response.ok) {        
            yield put({ type: 'ADD_EXPENSE_SUCCESS' });
            yield call(fetchExpenses, { trip: action.data.trip });
        }
    } catch (error) {
        yield put({ type: 'ADD_EXPENSE_FAILURE', error });
    }
};

function* addTrip(action) {
    try {
        const data = yield call(postTrip, action.data);
        if (data.ok) {
            yield put({ type: 'ADD_TRIP_SUCCESS' });
            yield call(fetchTrips);
        }
    } catch (error) {
        yield put({ type: 'ADD_TRIP_FAILURE', error });
    }
};

export default function* rootSaga() {
    yield takeLatest(FETCH_EXPENSES, fetchExpenses);
    yield takeLatest(FETCH_TRIPS, fetchTrips);
    yield takeLatest(ADD_EXPENSE, addExpense);
    yield takeLatest(ADD_TRIP, addTrip);
};


