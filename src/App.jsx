import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quote from './json/quotes.json'

// Array of colors
const arrayColors = [
  '#6B4A0A','#304377', '#A3154A', '#9681D7', '#C9513B', '#DB27A0', '#1B8754', '#AD47D5', '#233948', '#A26766'
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

// ---------------------------------------------------//

// Second generator of Random numbers
  let indexQuoteRandom2 = genRandomNumber(quote)
  let indexColorRandom2 = genRandomNumber(arrayColors)

  const switchgenRandomNumber = () => {
    if(quoteRandom === quoteRandom) {
      setQuoteRandom(quote[indexQuoteRandom2])
      setColorRandom(arrayColors[indexColorRandom2])
    }
  }

// Giving color to the background with the random colors
  const appStyle = {
    backgroundColor: colorRandom
  }

//Calling the components: QuoteBox
  return (
    <div style={appStyle} className="App">
      <QuoteBox
      quoteRandom={quoteRandom}
      colorRandom={colorRandom}
      switchgenRandomNumber={switchgenRandomNumber}
      />
    </div>
  )
}

export default App
