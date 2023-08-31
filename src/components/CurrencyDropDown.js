import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Select from "react-select";

// Utility function to define styles for the currency dropdown
const getCurrencyStyles = () => {
    return {
        option: (styles, { isFocused }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? "#90EE90" : "white",
                color: "black"
            };
        }
    };
};

const CurrencyDropDown = () => {
    const [currencyName, setCurrencyName] = useState('');
    const { dispatch } = useContext(AppContext);
    
    const CurrencyOptions = [
        { value: "$", label: "$ Dollar" },
        { value: "£", label: "£ Pound" },
        { value: "€", label: "€ Euro" },
        { value: "₹", label: "₹ Rupee" }
    ];

    const handleCurrencyChange = (selectedOption) => {
        const { value } = selectedOption;
        setCurrencyName(value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
    };

    return (    
        <div className='alert alert-success'  style={{ backgroundColor: '#90EE90'}}>     
            <Select
                defaultValue={CurrencyOptions[1]}
                label="Single select"
                options={CurrencyOptions}
                styles={getCurrencyStyles()}
                onChange={handleCurrencyChange}
            />     
        </div>
    );
};

export default CurrencyDropDown;
