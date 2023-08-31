import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import increaseImage from '../assets/increase.png';
import decreaseImage from '../assets/decrease.png';

// Component to handle Increase Allocation
const IncreaseAllocationButton = ({ name, onIncrease }) => {
    const buttonStyle = {
        width: '40px',
        height: '30px'
    };
    return (
        <button onClick={() => onIncrease(name)}>
            <img src={increaseImage} alt="Increment" style={buttonStyle} />
        </button>
    );
};

// Component to handle Decrease Allocation
const DecreaseAllocationButton = ({ name, onDecrease }) => {
    const buttonStyle = {
        width: '40px',
        height: '30px'
    };
    return (
        <button onClick={() => onDecrease(name)}>
            <img src={decreaseImage} alt="Decrement" style={buttonStyle} />
        </button>
    );
};

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

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

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <IncreaseAllocationButton name={props.name} onIncrease={increaseAllocation} />
            </td>
            <td>
                <DecreaseAllocationButton name={props.name} onDecrease={decreaseAllocation} />
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense} />
            </td>
        </tr>
    );
}

export default ExpenseItem;
