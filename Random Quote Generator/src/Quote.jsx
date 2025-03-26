import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandomQuotes } from './slices/quoteSlices'

const Quote = () => {
    const dispatch = useDispatch()
    const { quote, status, error } = useSelector((state) => state.quote)

    useEffect(() => {
        dispatch(fetchRandomQuotes())
    }, [dispatch])

    const handleFetchQuote = () => {
        dispatch(fetchRandomQuotes())
    }

    return (
        <div className='mt-12 items-center justify-center flex flex-col gap-4 p-6'>
            {status === 'loading' && (
                <div className='animate-spin rounded-full h-8 w-8 border-t-4 border-gray-500 border-opacity-50'></div>
            )}
            {status === 'succeeded' && quote && (
                <div className='flex flex-col items-center gap-4'>
                    <p className='text-xl text-gray-800 font-medium text-center italic'>" {quote.content} "</p>
                    <h4 className='text-sm font-semibold text-gray-600'>— {quote._id}</h4>
                    <h3 className='text-lg font-semibold text-gray-600'>— {quote.author}</h3>
                    <h2 className='text-md font-norma bg-black/80 px-2 py-1 rounded-lg text-white'>Added Date - {quote.dateAdded}</h2>
                    <h2 className='text-md font-norma bg-black/80 px-2 py-1 rounded-lg text-white'>Modified Date - {quote.dateModified}</h2>
                    <div className='flex gap-2 flex-wrap justify-center'>
                        {quote.tags.map((tag, index) => (
                            <span key={index} className='px-2 py-1 bg-gray-200 rounded-full text-sm text-gray-700'>#{tag}</span>
                        ))}
                    </div>
                    <h5 className='text-sm'>Length of the Quote - {quote.length}</h5>
                </div>
            )}
            {status === 'failed' && <p className='text-red-500'>{error}</p>}

            <button
                onClick={handleFetchQuote}
                type='button'
                className='px-6 py-2 bg-blue-600 hover:bg-blue-800 text-white text-lg rounded-xl shadow-md transition-all'
            >Generate Quote
            </button>
        </div>
    )
}

export default Quote