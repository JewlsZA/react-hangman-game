import React from 'react'
import { Row, Col } from "react-bootstrap"

const HangmenLetters = (props) => {
    // Styling for the dash '- - -' component
    const hangmanLetterStyle = {
      "font-size": "200%",
      "border-bottom": "5px solid blue",
      "margin-top": "30px",
      "margin-right": "30px",
      "text-align": "center",
    }
    let correctLettersGuessesCount = 0
    // This displays the right amount of dashes '- - -' for the hangman word
    const hangmenLetterComponents = props.hangmanWord.split("").map((letter) => {
      // This renders only correctly guessed letters to the user
      if (props.correctLettersGuesses.includes(letter)) {
        return <Col style={hangmanLetterStyle}>{letter}</Col>
      } else {
        return <Col style={hangmanLetterStyle}></Col>
      }
    })
    return <Row>{hangmenLetterComponents}</Row> 
  }

  export default HangmenLetters