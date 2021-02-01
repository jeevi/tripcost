import React, { Fragment, useState } from 'react';
import TripsLister from './TripsLister';
import ExpensesLister from './ExpensesLister';
import Grid from '@material-ui/core/Grid';


const Container = () => {
    const [trip, setTrip] = useState({
        _id: '',
        name: '',
    });

    const handleTripSelection = trip => {
        setTrip(trip);
    };

    const handleBackButtonClick = () => {
        setTrip({
            _id: '',
            name: '',
        });
    };

    return (
        <Fragment>
            <Grid container>
                {
                    trip._id && trip._id.length ?
                    <ExpensesLister onBackClick={handleBackButtonClick} trip={trip} onTripClick={handleTripSelection}/> :
                    <TripsLister onTripClick={handleTripSelection}/>
                }
            </Grid>
        </Fragment>
    )
};

export default Container;