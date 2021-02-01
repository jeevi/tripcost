import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import TripForm from './TripForm';
import ExpenseForm from './ExpenseForm';


const propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    trip: PropTypes.string,
};

const defaultProps = {
    trip: '',
};

const AddModal = ({
    open,
    onClose,
    trip,
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            {trip && trip.length ? <ExpenseForm trip={trip} onClose={onClose} /> : <TripForm onClose={onClose} /> }
        </Modal>
    )
};

AddModal.propTypes = propTypes;
AddModal.defaultProps = defaultProps;

export default AddModal;