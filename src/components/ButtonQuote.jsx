import React from 'react'

const ButtonQuote = ({colorRandom}) => {
  return (
    <button style={{backgroundColor: `${colorRandom}`}} className='quote-box__button'>
        <i class='bx bx-chevron-right'></i>
    </button>
  )
}

export default ButtonQuote