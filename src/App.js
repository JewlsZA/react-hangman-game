import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
// Local imports
import Introduction from "./components/Introduction"
import Controls from "./components/Controls"
import Hangman from "./components/Hangman"
import HangmenLetters from "./components/HangmenLetters"

// Game starting states
const setInitialState = () => {
  return {
    isHelpVisable: false,
    hangmanWord: "",
    correctLettersGuesses: "",
    incorrectGuessCount: 0,
    inputValue: "",
    gameProgress: "playing",
    correctLettersCount: 0,
  }
}

class App extends Component {
  // Starts the app with initial state values
  state = setInitialState()
  // When the Reset button is pressed, sets all state back to initial 'Defaults'
  // and fetches a new hangman word
  resetAppState = () => {
    this.setState(setInitialState())
    this.fetchWord()
  }
  //This is used to show/hide the help text. It is called by the Help button click
  toggleHelpVisable = () => {
    this.setState({
      isHelpVisable: !this.state.isHelpVisable,
    })
  }
  // This gets called on every letter entered by the user and determines if the user input letter exists in the hangmanWord
  checkIfMatchingLetter = (event) => {
    const lowercaseLettersGuess = event.target.value.toLowerCase()
    // This removes duplicate characters and alphabetically sorts the input string
    const removeDuplicateAndSortStrings = (stringToManipulate) => {
      return Array.from(new Set(stringToManipulate.split("")))
        .sort()
        .toString()
    }
    // This compares the player guessed characters to the hangmanWord characters and retunrs a boolen true if they match
    const hasPlayerWon = () => {
      const correctGuessesSortedString = removeDuplicateAndSortStrings(
        this.state.correctLettersGuesses
      )
      const hangmanWordSortedString = removeDuplicateAndSortStrings(
        this.state.hangmanWord
      )
      return correctGuessesSortedString === hangmanWordSortedString
    }
    // This ends the game to either a win or lose
    const checkGameOutcomeState = () => {
      // This changes the game state to lose if more than 10 wrong guesses is made
      if (this.state.incorrectGuessCount >= 10) {
        this.setState({
          gameProgress: "lose",
        })
      }
      // This changes the game state to win if all letters are guessed correct
      if (hasPlayerWon()) {
        this.setState({
          gameProgress: "win",
        })
      }
    }
    if (this.state.hangmanWord.includes(lowercaseLettersGuess)) {
      console.log("correct letter " + lowercaseLettersGuess)
      // adds the correct guessed letter to the correctLettersGuesses state if the letter does not already exist
      if (!this.state.correctLettersGuesses.includes(lowercaseLettersGuess)) {
        this.setState(
          {
            correctLettersGuesses:
              this.state.correctLettersGuesses + lowercaseLettersGuess,
            correctLettersCount: this.state.correctLettersCount + 1,
          },
          () => {
            console.log(
              "Callback Correct Guess " + this.state.correctLettersGuesses
            )
            checkGameOutcomeState() // calls to checks if game is over 
          }
        )
      }
      // increments the wrong letterguess count state
    } else {
      console.log("wrong letter")
      this.setState(
        {
          incorrectGuessCount: this.state.incorrectGuessCount + 1,
        },
        () => {
          console.log(
            "Callback Incorrect Guess " + this.state.incorrectGuessCount
          )
          checkGameOutcomeState() // calls to checks if game is over
        }
      )
    }
  }
  // this populates the user text input field state
  setInputValue = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }
  // this clears the user text input field state
  resetInput = () => {
    this.setState({ inputValue: "" })
  }
  // this sets the CorrectLettersCount state from the child component data
  handleCorrectLettersCountState = (childCorrectLettersCount) => {
    this.setState(
      {
        CorrectLettersCount: childCorrectLettersCount,
      },
      () => console.log("added child value to correctLettersCount state ")
    )
  }
  // This exports all components to index.js
  render() {
    return (
      <div style={{ padding: "30px" }}>
        <Introduction isHelpVisable={this.state.isHelpVisable} />
        <Container>
          <Row>
            <Col>
              <Hangman incorrectGuessCount={this.state.incorrectGuessCount} />
            </Col>
            <Col>
              <Controls
                resetAppState={this.resetAppState}
                incorrectGuessCount={this.state.incorrectGuessCount}
                gameProgress={this.state.gameProgress}
                inputValue={this.state.inputValue}
                resetInputHandler={this.resetInput}
                setInputValue={this.setInputValue}
                onHelpClick={this.toggleHelpVisable}
                onLetterInputChange={this.checkIfMatchingLetter}
              />
            </Col>
          </Row>
          <br />
          <HangmenLetters
            hangmanWord={this.state.hangmanWord}
            correctLettersGuesses={this.state.correctLettersGuesses}
            parentCorrectLettersCount={this.handleCorrectLettersCountState}
          />
        </Container>
      </div>
    )
  }
  // Fetches a word from a random word generator api.
  // Sets the hangman word state
  fetchWord() {
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then((result) => {
        return result.json()
      })
      .then((result) => {
        this.setState({ hangmanWord: result[0] })
      })
  }
  // calls fetchWord on initial game load 
  componentDidMount() {
    this.fetchWord()
  }
}

export default App
