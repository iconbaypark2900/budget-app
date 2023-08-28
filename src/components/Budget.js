import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);

    const increaseBudget = () => {
        dispatch({
            type: 'INCREASE_BUDGET'
        });
    };

    const decreaseBudget = () => {
        dispatch({
            type: 'DECREASE_BUDGET'
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <button onClick={increaseBudget} className="btn btn-success ml-4">+ £10</button>
            <button onClick={decreaseBudget} className="btn btn-danger ml-2">- £10</button>
        </div>
    );
};

export default Budget;
