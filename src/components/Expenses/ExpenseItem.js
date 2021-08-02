import React from 'react'

const ExpenseItem = ({item}) => {
    const month = item.date.toLocaleString('en-US', { month: 'short' });
    const day = item.date.toLocaleString('en-US', { day: '2-digit' });
    const year = item.date.getFullYear();

    return (
        <li className="flex flex-wrap bg-white p-5 border border-gray-300 rounded-xl shadow-lg mb-3">
            <h1 className="flex-auto text-xl font-semibold">{item.title}</h1>
            <div className="text-xl font-semibold text-gray-500">${item.amount}</div>
            <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">{day}-{month}, {year}</div>
        </li>
    )
}

export default ExpenseItem
