import React from 'react'

const Card = ({tweetRandom, colorRandom}) => {

  return (
    <article style={{color: `${colorRandom}`}} className='card'>
            <div className='card__quote-container'>
                <span style={{color: `${colorRandom}`}} className='card__ticks'>"</span>
                <p className='card__quote'>{tweetRandom.quote}</p>
            </div>
            <div>
                <p className='card__author'>{tweetRandom.author}</p>
            </div>
            <div>
                <span style={{color: `${colorRandom}`}} className='card__arrow'>→</span>
            </div>
    </article>
  )
}

export default Card