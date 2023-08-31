import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining, currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('Add');

    const handleNameChange = (event) => setName(event.target.value);
    const handleCostChange = (event) => setCost(event.target.value);
    const handleActionChange = (event) => setAction(event.target.value);

    const submitEvent = () => {
        if (parseInt(cost) > remaining) {
            alert(`The value cannot exceed remaining funds  ${currency}${remaining}`);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        const actionType = action === "Reduce" ? 'RED_EXPENSE' : 'ADD_EXPENSE';

        dispatch({
            type: actionType,
            payload: expense,
        });
    };

    const labelStyle = { marginLeft: '2rem' };
    const inputStyle = { marginLeft: '.5rem', size: 10 };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={labelStyle}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={handleNameChange}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Finance">Finance</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Admin">Admin</option>
                    </select>

                    <div className="input-group-prepend" style={labelStyle}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={handleActionChange}>
                        <option defaultValue value="Add">Add</option>
                        <option value="Reduce">Reduce</option>
                    </select>

                    <div className="input-group-prepend" style={labelStyle}>
                        <label>{currency}</label>
                    </div>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={inputStyle}
                        onChange={handleCostChange}
                    />

                    <button className="btn btn-primary" onClick={submitEvent} style={labelStyle}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;

