import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext';
const Remaining = () => {
    const {expenses, budget, currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const remainingBudget = budget - totalExpenses
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    const isBudgetExceeded = remainingBudget < 0;
    if (isBudgetExceeded) {
        alert('Budget exceeded! Please adjust your spending.');
      }
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{remainingBudget}</span>
            {isBudgetExceeded && (
                <span style={{ marginLeft: '1rem', color: 'red' }}>
                    Budget exceeded!
                </span>
            )}
        </div>
    );
};
export default Remaining
