import React from 'react'

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='h-full flex flex-col items-center'>
            <div className='flex w-4 h-full flex-col justify-end bg-blue-200 border border-blue-500'>
                <div
                className='w-full bg-blue-500'
                style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className='text-black text-sm'>{props.label}</div>
        </div>
    )
}

export default ChartBar
