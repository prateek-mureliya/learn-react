import React from 'react'

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
    
    return (
        <div className='flex justify-between pb-5'>
            <label className="text-lg leading-6 font-medium text-gray-500">Filter by year</label>
            <select
                className="text-lg leading-6 font-medium text-gray-500 border border-blue-500 rounded-md"
                value={props.selected}
                onChange={dropdownChangeHandler}
            >
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    )
}

export default ExpensesFilter
