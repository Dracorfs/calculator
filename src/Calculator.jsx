import { useState } from 'react'
import { evaluate } from 'mathjs'

export const operations = ['+', '-', '*', '/']
export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const equalSign = '='
const rows = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0],
]

export const Calculator = () => {
    const [value, setValue] = useState('')

    const createHandleClick = op => () => setValue(value.concat(op))

    return (
        <div className='bg-gray-500 grid place-items-center min-h-screen'>
            <h1 className='text-3xl font-bold'>Calculator.</h1>
            <input value={value} readOnly className='rounded-md'/>
            <div role="grid" className='bg-black text-white rounded-md p-8'>
                {rows.map((row, idx) => (
                    <div key={idx} role='row'>
                        {row.map( number =>
                            <button
                                onClick={ createHandleClick(number) }
                                key={ number }
                                className='bg-gray-600 border-none rounded px-4 py-2 m-2'
                            >
                                { number }
                            </button>
                        )}
                    </div>
                ))}
                {
                    operations.map(operation => (
                        <button
                            onClick={ createHandleClick(operation) }
                            key={operation}
                            className='bg-gray-600 border-none rounded px-4 py-2 m-2'
                        >
                            {operation}
                        </button>
                    ))
                }
                <button
                    onClick={ () => setValue(evaluate(value))}
                    className='bg-gray-600 border-none rounded px-4 py-2 m-2'
                >
                    {equalSign}
                </button>
            </div>
        </div>
    )
}