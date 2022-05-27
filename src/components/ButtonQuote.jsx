import React from 'react'

// Strcuture of the ButtonQuote
const ButtonQuote = ({colorRandom, switchgenRandomNumber}) => {
  return (
// Giving function fo make random numbers by clicking the button and random colors
        <button onClick={switchgenRandomNumber} style={{backgroundColor: `${colorRandom}`}} className='quote-box__button'>
            <i className='bx bx-chevron-right'></i>
        </button>
  )
}

export default ButtonQuote