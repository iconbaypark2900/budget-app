import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

// Component to display alert with dynamic alert type and content
const AlertBox = ({ alertType, children }) => (
    <div className={`alert ${alertType}`}>
        {children}
    </div>
);

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <AlertBox alertType={alertType}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </AlertBox>
    );
};

export default Remaining;

