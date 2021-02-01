import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTrip } from '../actions/actions';


function getModalStyle() {
    return {
      top: '50%',
      left: '50%',
      transform: `translate(-${50}%, -${50}%)`,
    };
}
  
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    h2: {
        margin: '0px 0px 5px 0px',
    },
    text: {
        margin: '5px 0px 5px 0px',
    }
}));

const propTypes = {
    addTrip: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

const TripForm = ({ addTrip, onClose }) => {
    const classes = useStyles();
    const [ modalStyle ] = useState(getModalStyle);
    const [ trip, setTrip ] = useState('');

    const handleChange = event => {
        setTrip(event.target.value);
    };

    const handleSubmit = () => {
        addTrip(trip);
        onClose();
    };

    return (
        <div style={modalStyle} className={classes.paper}>
            <h2 className={classes.h2}>Add Trip</h2>
            <TextField id="outlined-basic" label="Trip" variant="outlined" onChange={handleChange} className={classes.text} value={trip} /><br/>
            <Button
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    );

};

TripForm.propTypes = propTypes;

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        addTrip,
    }, dispatch,
);

export default connect(null, mapDispatchToProps)(TripForm);