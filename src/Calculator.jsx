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
        <div className='grid place-items-center bg-gray-500 min-h-screen'>
            <header className='block w-auto'>
                <h1 className='text-3xl font-serif font-bold'>Calculator.</h1>
            </header>
            <section className='grid place-items-center bg-gray-400 rounded-xl p-10'>
                <input value={value} readOnly className='text-gray-900 italic bg-gray-300 rounded-md w-full h-14 mb-4 py-4 px-8 outline-none'/>
                <div role="grid" className='bg-gray-300 text-white rounded-md p-5'>
                    <div className='flex'>
                        <div className='grid vertical-align'>
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
                        </div>
                        <div className='grid vertical-align'>
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
                        </div>
                    </div>
                    <button
                        onClick={ () => setValue(evaluate(value))}
                        className='bg-gray-600 border-none rounded px-4 py-2 m-2 w-full'
                    >
                        {equalSign}
                    </button>
                </div>
            </section>
            <footer className='text-3xl font-serif font-bold'>
                Sober style.
            </footer>
        </div>
    )
}