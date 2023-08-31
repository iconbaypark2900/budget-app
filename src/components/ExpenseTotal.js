import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// Component to display alert with dynamic alert type and content
const AlertBox = ({ alertType = 'alert-primary', children }) => (
    <div className={`alert ${alertType}`}>
        {children}
    </div>
);

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    return (
        <AlertBox>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </AlertBox>
    );
};

export default ExpenseTotal;
