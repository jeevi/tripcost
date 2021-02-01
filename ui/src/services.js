import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000';

export const getTrips = () => {
    return axios.get(`${BASE_URL}/trips`)
        .then(response => response.data)
        .catch(error => error);
};

export const postTrip = name => {
    return axios.post(`${BASE_URL}/trip`, { name })
        .then(response => response.data)
        .then(error => error);
};

export const getExpenses = trip => {
    return axios.post(`${BASE_URL}/expenses`, { trip })
        .then(response => response.data)
        .then(error => error);
};

export const postExpense = ({ trip, date, amount, category, description }) => {
    return axios.post(`${BASE_URL}/expense`, { trip, date, amount, category, description })
        .then(response => response.data)
        .then(error => error);
};