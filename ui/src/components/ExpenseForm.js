import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addExpense } from '../actions/actions';


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
    addExpense: PropTypes.func.isRequired,
    trip: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

const ExpenseForm = ({ addExpense, trip, onClose }) => {
    const classes = useStyles();
    const [ modalStyle ] = useState(getModalStyle);
    const [ expense, setExpense ] = useState({

    });

    const handleChange = event => {
        const clonedExpense = JSON.parse(JSON.stringify(expense));
        clonedExpense[event.target.id] = event.target.value;
        setExpense(clonedExpense);
    };

    const handleSubmit = () => {
        addExpense({ trip, ...expense });
        onClose();
    };

    return (
        <div style={modalStyle} className={classes.paper}>
            <h2 className={classes.h2}>Add Expense</h2>
            <TextField id="date" label="Date" variant="outlined" onChange={handleChange} className={classes.text} value={expense.date} /><br/>
            <TextField id="amount" label="Amount" variant="outlined" onChange={handleChange} className={classes.text} value={expense.amount} /><br/>
            <TextField id="category" label="Category" variant="outlined" onChange={handleChange} className={classes.text} value={expense.category} /><br/>
            <TextField id="description" label="Description" variant="outlined" onChange={handleChange} className={classes.text} value={expense.description} /><br/>
            <Button
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    );

};

ExpenseForm.propTypes = propTypes;

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        addExpense,
    }, dispatch,
);

export default connect(null, mapDispatchToProps)(ExpenseForm);