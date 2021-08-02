import React from 'react'

import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='flex justify-around text-center h-40 bg-white p-5 border border-gray-300 rounded-xl shadow-lg'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart
