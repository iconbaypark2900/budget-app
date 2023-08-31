import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const dropdownStyles = {
    backgroundColor: '#90EE90',
    color: 'white'
};

const optionStyles = {
    color: 'black'
};

const CurrencyOptions = [
    { value: '$', label: '$ Dollar' },
    { value: '£', label: '£ Pound' },
    { value: '€', label: '€ Euro' },
    { value: '₹', label: '₹ Rupee' }
];

const Currency = () => {
    const [currencyName, setCurrencyName] = useState('');
    const { dispatch } = useContext(AppContext);

    useEffect(() => {
        if (currencyName) {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: currencyName,
            });
        }
    }, [currencyName, dispatch]);

    return (
        <div className='alert alert-success' style={dropdownStyles}>
            <select
                defaultValue={'DEFAULT'}
                style={dropdownStyles}
                onChange={(event) => setCurrencyName(event.target.value)}>
                
                <option style={optionStyles} value="DEFAULT" label="Currency (€ Euro)" hidden disabled></option>
                
                {CurrencyOptions.map(option => (
                    <option key={option.value} style={optionStyles} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Currency;
