import React, {useContext} from 'react';
import {FaTimesCircle, FaPlusCircle, FaMinusCircle} from 'react-icons/fa';
import {AppContext} from '../context/AppContext'

const ExpenseItem = (props) => {
    const {dispatch, currency} = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch ({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch ({
            type: 'RED_EXPENSE',
            payload: expense
        })
    }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle size='1.5em' color='green' cursor='pointer' onClick={event => increaseAllocation(props.name)}></FaPlusCircle></td>
            <td><FaMinusCircle size='1.5em' color='red' cursor='pointer' onClick={event => decreaseAllocation(props.name)}></FaMinusCircle></td>
            <td><FaTimesCircle size='1.5em' color='red' cursor='pointer' onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem
