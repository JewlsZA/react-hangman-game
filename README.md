# Getting Started with Hangman

To run the game on your system you would need to install React and Node.js
Here is a quick guide to get you started: https://www.freecodecamp.org/news/install-react-with-create-react-app/

Open the project files in your favorite IDE and Change Directory to the project in your terminal of choice.

To install dependancies run the following in the terminal.
```
npm install
```
To start your local react and express servers, navigate to the backend and frontend file directory and run the following command in the terminal.
```
npm start 
```
a Browser windows should open where you can play the game !
If the browser does not open type http://localhost:3000/ in your browser


# Rules Hangman

The aim of the game is to figure out what word is behind the dash symbols by guessing the letters. The amount of dash symbols represent the number of letters the word contains. Make more than 10 wrong guesses and you will lose the game.
If a word contains more than one of the same letter, you only need to guess it once for all recurances of the letter. You also do not need to guess the location of the letters, only what letters are in the word.

# How to play Hangman

Enter your letter of choice into the text box provideed and click on the submit button to enter your letter. Once entered you will either get a wrong or correct guess. If you guess wrong the hangman would get one step closer to hanging, remember you only have 10 wrong guesses. If you guess correct the letter(s) would appear in the right place holder(s) location in the array of Dash symbols.
