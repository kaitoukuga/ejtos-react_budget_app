import React, {useContext, useState} from 'react'
import {AppContext} from '../context/AppContext';
const Budget = () => {
    const {budget, currency, dispatch} = useContext(AppContext)

    const [editableBudget, setEditableBudget] = useState(budget)
    const handleBudgetChange = (event) => {
        setEditableBudget(event.target.value)
        const newBudget = parseInt(editableBudget);
        if (newBudget <= 20000) {
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        } else {
            alert("Budget cannot exceed "+currency+"20000")
            setEditableBudget('20000') 
        }
    }       
    
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input 
                type="number" 
                required="required"
                step={10} 
                value={editableBudget}
                style={{size:'10rem'}}
                onChange={handleBudgetChange}>
            </input>
        </div>
    );
};
export default Budget
