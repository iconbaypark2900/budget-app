import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const [inputBudget, setInputBudget] = useState('');
    const { budget, dispatch, remaining, currency } = useContext(AppContext);

    const inputStyle = {
        size: 10
    };

    useEffect(() => {
        console.log(currency);
    }, [currency]);

    const handleInputChange = (event) => {
        const value = event.target.value;

        if (value >= 20000) {
            alert("The budget value cannot exceed more than 20,000!");
            setInputBudget("");
            return;
        }

        const spending = value - remaining;

        if (value <= spending) {
            alert("CANNOT BE LOWER THAN SPENDING!");
            return;
        }

        setInputBudget(value);

        const action_setBudget = {
            type: 'SET_BUDGET',
            payload: parseInt(value),
        };

        dispatch(action_setBudget);
    };

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={inputStyle}
                    step="10"
                    onChange={handleInputChange}
                />
            </span>
        </div>
    );
};

export default Budget;

