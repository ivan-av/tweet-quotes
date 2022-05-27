import React from 'react'
import ButtonQuote from './ButtonQuote'

const QuoteBox = ({quoteRandom, colorRandom}) => {

  return (
    <article style={{color: `${colorRandom}`}} className='quote-box'>
            <div className='quote-box__quote-container'>
                <span style={{color: `${colorRandom}`}} className='quote__ticks'><i class='bx bxs-quote-left'></i></span>
                <p className='quote-box__quote'>{quoteRandom.quote}</p>
            </div>
            <div>
                <p className='quote-box__author'>{quoteRandom.author}</p>
            </div>
            <div>
                <ButtonQuote 
                colorRandom={colorRandom}
                />
            </div>
    </article>
  )
}

export default QuoteBox