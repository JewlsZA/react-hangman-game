import React from 'react'
import { Container } from 'react-bootstrap';

const Introduction = (props) => {
    // This displayes/Hides the game rules on Help button pressed
    const toggleHelpVisability = (isHelpVisable) => {
        return isHelpVisable ?
            <div>
                <h3>The Rules of the Game</h3>
                <p>The aim of the game is to figure out what word is behind the dash symbols by guessing the letters. The amount of dash symbols represent the number of letters the word contains. Make more than 10 wrong guesses and you will lose the game.
                    If a word contains more than one of the same letter, you only need to guess it once for all recurances of the letter. You also do not need to guess the location of the letters, only what letters are in the word.
                </p>
            </div>
            : null
    }

    return (
        <div>
            <Container>
                <h2> Welcome to the hangman game </h2>
                {toggleHelpVisability(props.isHelpVisable)}
            </Container>
        </div>
    )
}

export default Introduction
