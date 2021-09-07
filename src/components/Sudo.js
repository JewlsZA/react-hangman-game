
//components

//1. landing title and rules (dumb functional)

//2. hangman (class + states)
    // Import hangman.jpgs into map/array
    // entering wrong letters should add count to hangman.jpgs map rendering
    // hangman image state changes and sync with count of wrong words entered
    // hangman.jpg only 10 mistakes can be made then YOU LOSE. 1st .jpg is the starting
    // reset when RESET button is pressed


//3. letters (class + states) maybe 2 components
    //THE RANDOM WORD
        // Import dictionary.txt into array words
        // game is NOT CASE sesitive
        // Random word must be selected and stored from array words
        // Perhaps store as array map with index to easy swop out '_' for 'e'(correct letter)
        // Key value pair - - - - - , h e l l o perhaps
        // use if to check letter entered exists in RANDOM WORD 
        // New word must be retreaved when RESET button press

    // THE ------
        // save var = ' _ '
        // - - - - must be rendered depending on the string length of the word
        // perhaps use array map with index for --- to easy swop out '_' for 'e'(correct letter)
        // use map to render right ammount of - - -
        // correct letters entered will change ' - ' into ' e ' letter
        // reset render to new RANDOM WORD when RESET button is pressed,
     

//4. controls (class + states)
    // INPUT FIELD
        // only ONE letter at a time including (a-zA-Z) and '-'
        // game is NOT case sensitive, convert input to uppercase
        // array of wrong letters entered should be saved
        // new same wrong answers should not allowed (scan wrong letter array on each new entry)
        // entering the correct letters again should also be accounted for
        // field should be cleared after CONFIRM CHOICE

    // CONFIRM CHOICE
        //button triggers validation of input, save input, display letter if correct or change state of hangman

    // HELP 
        // button render the rules
    
    //RESET
        // button resets all fields (shortcut perhaps just rerender/refresh the page)

    //WIN / LOSE
        // change state text to win/lose if all words correct or made 10 mistakes
        // change color to red or green depending on win/lose state
        // display text YOU WIN / YOU LOSE depending on win/lose state
        // stop any further input  (freeze INPUT FIELD)
        // use material ui COLOR primary and secondary blue/red
        


//global state needs
//hangman & letters component should be synced

//STATES
    //Game condition 1.playing 2.win 3.lose
    // Rules hidden or not
    