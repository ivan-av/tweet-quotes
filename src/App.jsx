import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quote from './json/quotes.json'

// Array of colors
const arrayColors = [
  '#6B4A0A','#304377', '#A3154A', '#9681D7'
]

function App() {

// Generaton of random numbers
  const genRandomNumber = array => {
    return Math.floor(Math.random() * array.length)
  }

// Asignation of random numbers for the arrays of tweets and colors
  let indexQuoteRandom = genRandomNumber(quote)
  let indexColorRandom = genRandomNumber(arrayColors)

// Anchors using useState for Tweets and color
  const [quoteRandom, setQuoteRandom] = useState(quote[indexQuoteRandom])
  const [colorRandom, setColorRandom] = useState(arrayColors[indexColorRandom])

  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <QuoteBox
      quoteRandom={quoteRandom}
      colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
