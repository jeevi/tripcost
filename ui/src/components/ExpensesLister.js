import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadExpenses }  from '../actions/actions';
import AddModal from './AddModal';
import Lister from './Lister';
import { Button } from '@material-ui/core';
import { getHeaders } from '../utils';

const propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        trip: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })).isRequired,
    loadExpenses: PropTypes.func.isRequired,
    trip: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onTripClick: PropTypes.func.isRequired,
};

const ExpensesLister = ({ expenses, loadExpenses, trip, onTripClick }) => {
    useEffect(() => {
        loadExpenses(trip._id);
    }, [trip._id]);

    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const headers = getHeaders(expenses);
    return (
        <Fragment>
            <AddModal
                open={open}
                onClose={handleClose}
                trip={trip}
            />
            <Button 
                onClick={() => onTripClick('')}
            >
                Back
            </Button>
            <br />
            <h1 style={{ margin: '10px 0px 5px 0px'}}>
                {trip.name}
            </h1>
            <br />
            <Lister headers={headers} rows={expenses} />
            <Button
                onClick={handleOpen}
            >
                Add Expense
            </Button>
        </Fragment>
    );
};

ExpensesLister.propTypes = propTypes;

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        loadExpenses,
    }, dispatch,
);

const mapStateToProps = state => ({
    expenses: state.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesLister);