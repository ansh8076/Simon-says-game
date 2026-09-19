# Simon Says Game

A browser-based memory game inspired by the classic Simon Says, built entirely with HTML, CSS, and vanilla JavaScript. The game challenges players to watch and repeat an ever-growing sequence of colors, testing memory, focus, and reaction time.

# Overview

Simon Says is a frontend mini-project built from scratch, covering core JavaScript concepts like DOM manipulation, event handling, and game state logic, along with custom CSS animations and a fully responsive layout for mobile devices.

# Features
Core Gameplay
Randomly generated color sequence that grows by one step each round
Visual flash feedback when the game plays a sequence
Visual feedback when the player clicks a button (userFlash)
Score tracking for the current game and the session's high score
Sound effects for button presses, sequence flashes, and game over
Background music that loops during gameplay
Game over detection with automatic reset on next keypress


# Instructions Overlay
A welcoming start screen with a step-by-step "How to Play" guide
A "Why it's worth playing" section highlighting memory and focus benefits
A closing message from the developer before the player starts
Dismissible overlay that transitions cleanly into the game screen


# Mobile Responsive Design
Fully responsive layout that adapts across phones, tablets, and desktops using CSS media queries
Button grid uses flexbox with wrap and gap spacing, so it resizes cleanly instead of overflowing on small screens
Button sizes scale using vmin units with defined minimum and maximum limits, so they never look too large or too small
Font sizes for headings and scores use clamp() so text scales smoothly between a minimum and maximum size based on screen width
The main game screen (heading, score panel, and button grid) is vertically and horizontally centered on the viewport using flexbox on the body
A dedicated breakpoint for very small phones (under 420px) tightens spacing and button size further
Separate background image served for mobile screens


# Tech Stack
HTML5 for structure and semantic markup
CSS3 for styling, including Flexbox, media queries, and Google Fonts (Poppins, Kanit, Martel Sans, Rakkas)
Vanilla JavaScript for all game logic, no external libraries or frameworks used

# Project Structure
simon-says-game-mini-project/
├── simon-says.html
├── simon-says.css
├── simon-says.js
├── simon-says-game-bg.png
├── mobile-simon.png
├── music-glitch-squid-game-way-back-then-55389.mp3
├── mixkit-quest-game-interface-click-1139.wav
├── mixkit-retro-arcade-lose-2027.wav
├── squid_game_intro.mp3
└── README.md


# How to Play
Click the START button on the instructions screen to begin.
Watch the board light up one pad at a time in one of four colors. It only plays once, so pay close attention.
Click the pads in the exact order they lit up. There is no time limit, but the order has to match.
Get it right, and the sequence grows by one more step each round.
A single wrong click ends the run. Whatever round you reached becomes your score for that attempt.
Press any key after a game over to reset and try to beat your high score.
Running the Project Locally

Since this is a pure frontend project with no build tools or dependencies, it can be run directly in a browser:

Clone or download the project folder.
Make sure all asset files (images and audio) are in the same folder as simon-says.html.
Open simon-says.html directly in any modern browser, or use a live server extension for the best experience.
Future Improvements
Add a difficulty setting to control sequence speed
Store high score in local storage so it persists across sessions
Add a mute/unmute toggle for background music
Add keyboard support for playing without a mouse or touch


# Credits
Built as a personal frontend practice project to strengthen core JavaScript, CSS, and responsive design skills.

# Author
Ansh 
