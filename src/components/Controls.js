import React from "react"
import { Container, Row, Col, Jumbotron, Button, Form } from "react-bootstrap"

const Controls = (props) => {
  // This displays the user input text in place for a short duration
  const onChangeHandler = (event) => {
    props.setInputValue(event)
    setTimeout(props.resetInputHandler, 270)
    props.onLetterInputChange(event)
  }
  // This shows the user Wrong Guesses made and displays end game Results Win/Lose
  let winButtonVariant = ""
  let winButtonText = ""
  let isInputDisabled = false
  // change button variant and text and disables the input field if the game is over
  if (props.gameProgress === "win") {
    isInputDisabled = true
    winButtonVariant = "success"
    winButtonText = "You Won the Game "
  } else if (props.gameProgress === "lose") {
    isInputDisabled = true
    winButtonVariant = "danger"
    winButtonText = "You Lost the Game "
  } else if (props.gameProgress === "playing") {
    isInputDisabled = false
    winButtonVariant = "primary"
    winButtonText = "Wrong Guesses made " + props.incorrectGuessCount
  }

  return (
    <div>
      <Container>
        <Jumbotron>
          <Row>
            {/* User text Input */}
            <Col lg={9}>
              <Form.Control
                disabled={isInputDisabled}
                value={props.inputValue}
                onChange={onChangeHandler}
                style={{ width: "55%" }}
                type="input"
                placeholder="enter you letter"
              />
            </Col>
            {/* Help Button */}
            <Col>
              <Button onClick={props.onHelpClick}>Help</Button>
            </Col>
          </Row>
          <Row>
            {/* Wrong Guess count & win/lose button */}
            <Col lg={9}>
              <Button variant={winButtonVariant} size="lg" className="mt-4">
                {winButtonText}
              </Button>
            </Col>
            {/* Rest Button */}
            <Col>
              <Button className="mt-4" onClick={props.resetAppState}>
                Reset
              </Button>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  )
}

export default Controls
