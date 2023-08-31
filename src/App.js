import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import Currency from './components/Currency';

const HeaderSection = ({ title }) => (
    <>
        <h1 className='mt-3'>{title}</h1>
    </>
);

const RowSection = ({ children }) => (
    <div className='row mt-3'>
        {children}
    </div>
);

const App = () => (
    <AppProvider>
        <div className='container'>
            <HeaderSection title="Company's Budget Allocation" />
            <RowSection>
                <div className='col-sm'><Budget /></div>
                <div className='col-sm'><RemainingBudget /></div>
                <div className='col-sm'><ExpenseTotal /></div>
                <div className='col-sm'><Currency /></div>
            </RowSection>
            
            <HeaderSection title="Allocation" />
            <RowSection>
                <div className='col-sm'><ExpenseList /></div>
            </RowSection>

            <HeaderSection title="Change allocation" />
            <RowSection>
                <div className='col-sm'><AllocationForm /></div>
            </RowSection>
        </div>
    </AppProvider>
);

export default App;
