import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadTrips }  from '../actions/actions';
import AddModal from './AddModal';
import Lister from './Lister';
import { Button } from '@material-ui/core';
import { getHeaders } from '../utils';

const propTypes = {
    trips: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
    loadTrips: PropTypes.func.isRequired,
    onTripClick: PropTypes.func.isRequired,
};

const defaultProps = {
    trips: [],
};

const TripsLister = ({ trips, loadTrips, onTripClick }) => {
    useEffect(() => {
        loadTrips();
    }, []);

    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const headers = getHeaders(trips);
    console.log(headers, trips);
    return (
        <Fragment>
            <AddModal
                open={open}
                onClose={handleClose}
            />
            <Lister headers={headers} rows={trips} onTripClick={onTripClick}/>
            <Button onClick={handleOpen}>
                Add Trip
            </Button>
        </Fragment>
    );
};

TripsLister.propTypes = propTypes;
TripsLister.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        loadTrips,
    }, dispatch,
);

const mapStateToProps = state => ({
    trips: state.trips,
});

export default connect(mapStateToProps, mapDispatchToProps)(TripsLister);