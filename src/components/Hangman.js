import React from 'react'
import hangmanImage1 from '../hangmandrawings/state1.GIF'
import hangmanImage2 from '../hangmandrawings/state2.GIF'
import hangmanImage3 from '../hangmandrawings/state3.GIF'
import hangmanImage4 from '../hangmandrawings/state4.GIF'
import hangmanImage5 from '../hangmandrawings/state5.GIF'
import hangmanImage6 from '../hangmandrawings/state6.GIF'
import hangmanImage7 from '../hangmandrawings/state7.GIF'
import hangmanImage8 from '../hangmandrawings/state8.GIF'
import hangmanImage9 from '../hangmandrawings/state9.GIF'
import hangmanImage10 from '../hangmandrawings/state10.GIF'
import hangmanImage11 from '../hangmandrawings/state11.GIF'

const hangmenImages = [hangmanImage1, hangmanImage2, hangmanImage3, hangmanImage4, hangmanImage5, hangmanImage6, hangmanImage7, hangmanImage8, hangmanImage9, hangmanImage10, hangmanImage11]
// This returns a hangman image from the array with index equal to the incorrectGuessCount state
 const Hangman = (props) => {
    return (
        <div>
            <img src={hangmenImages[props.incorrectGuessCount]} alt="hangman" />
        </div>
    )
}

export default  Hangman