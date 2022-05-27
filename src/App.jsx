import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import tweet from './json/tweets.json'

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
  let indexTweetRandom = genRandomNumber(tweet)
  let indexColorRandom = genRandomNumber(arrayColors)

// Anchors using useState for Tweets and color
  const [tweetRandom, setTweetRandom] = useState(tweet[indexTweetRandom])
  const [colorRandom, setColorRandom] = useState(arrayColors[indexColorRandom])

  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <Card 
      tweetRandom={tweetRandom}
      colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
