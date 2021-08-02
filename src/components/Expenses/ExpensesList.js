import React from 'react'

import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({items}) => {
    if(items.length===0){
        return <h2 className='text-center font-bold mt-5'>Found no expenses.</h2>
    }

    return (
        <ul className="mt-5">
            {items.map((item)=>(
                <ExpenseItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default ExpensesList
