import React from 'react'

export default function Quote({ id, quote , handleOnClickSelectedQuote}) {
    return (
        <div className="quote" 
            onClick={() => handleOnClickSelectedQuote(id)}>
            <h1>{id}</h1>
            <p>{quote}</p>
        </div>
    )
}
