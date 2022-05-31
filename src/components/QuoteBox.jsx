import React from 'react'
import ButtonQuote from './ButtonQuote'

const QuoteBox = ({quoteRandom, colorRandom, switchgenRandomNumber}) => {

//Structure of the QuoteBox and random colors and quotes
  return (
    <article style={{color: colorRandom}} className='quote-box'>
            <div className='quote-box__quote-container'>
                <span style={{color: colorRandom}} className='quote__ticks'><i className='bx bxs-quote-left'></i></span>
                <p className='quote-box__quote'>{quoteRandom.quote}</p>
            </div>
            <div>
                <p className='quote-box__author'>{quoteRandom.author}</p>
            </div>
{/* Calling the ButtonQuote */}
            <div>
              <ButtonQuote 
                colorRandom={colorRandom}
                switchgenRandomNumber={switchgenRandomNumber}
              />
            </div>
    </article>
  )
}

export default QuoteBox