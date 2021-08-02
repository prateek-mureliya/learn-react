import React, {useState} from 'react'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        stopEditingHandler()
    }

    return (
        <div className="mt-10 mx-auto max-w-xl bg-white p-5 border border-blue-600 rounded-xl text-center">
            {!isEditing && <button 
                className="bg-blue-100 font-medium hover:bg-blue-200 hover:text-blue-800 px-4 py-2 rounded-md text-blue-600 text-sm"
                onClick={startEditingHandler}
                >Add New Expense</button>}
                
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense
