import React, { useState } from 'react'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='grid grid-cols-6 gap-6 text-left'>
                <div className='col-span-6 sm:col-span-3'>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input type='text'
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 border w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                        />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                    <input type='number'
                        min='0.01'
                        step='0.01'
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 border w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                        />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 border w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                        />
                </div>
            </div>
            <div className='flex justify-end mt-6'>
                <button type="button"
                    className="bg-blue-100 font-medium hover:bg-blue-200 hover:text-blue-800 px-4 py-2 rounded-md text-blue-600 text-sm mr-2"
                    onClick={props.onCancel}
                    >Cancel</button>
                <button type='submit'
                    className="bg-red-100 font-medium hover:bg-red-200 hover:text-red-800 px-4 py-2 rounded-md text-red-600 text-sm"
                    >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
