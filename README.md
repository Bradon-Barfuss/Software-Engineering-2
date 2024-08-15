# Software Engineering 2 Class

## Assignment 6: Banking App

**Features:**
- **RBAC**: Three different RBAC roles: Administrator, employee, and customer.
  - **Administrator:** Access to all screens & elevate/demote user roles.
  - **Employee:** View and manage accounts using customer IDs and deposit/withdraw money and transfer between customer accounts.
  - **Customer:** Deposit/withdraw money into savings, checking, and investment accounts and view full and individual account transaction histories.
- **Password Security:** Implemented SHA-256 hashing for passwords to ensure security and set up routes for secure login and account management.
- **Frontend Naviagtion:** Utilized React Router for navigation between pages.
- **Frontend Styling:** Applied Bootstrap for a consistent and clean layout.
- **Backend Setup:** Developed with Node.js and Express for handling requests and responses.


## Assignment 5: Hangman Game

<img src="https://github.com/Bradon-Barfuss/Software-Engineering-2/blob/main/Pictures/hangman_game.png">
<img src="https://github.com/Bradon-Barfuss/Software-Engineering-2/blob/main/Pictures/hangman_highscore.png">

- **Features:**
  - **User Interaction:** Users start by entering their name, then play a traditional Hangman game.
  - **Database:** MongoDB stores a list of at least 1000 words, randomly selecting words for each game. High scores are recorded and queried from the database.
  - **High Scores:** Stores and displays the top 10 high scores for words of similar length, showing player names, number of guesses, and word length.
  - **Session Management:** Uses sessions to store user names after successful games and manages gameplay without prompting for the username again.


## Assignment 4: MERN and Sessions

<img src="https://github.com/Bradon-Barfuss/Software-Engineering-2/blob/main/Pictures/mern_session_picture.png">
<img src="https://github.com/Bradon-Barfuss/Software-Engineering-2/blob/main/Pictures/mern_session_reg_picture.png">

- **Features:**
  - **User Sessions:** Implemented session tracking for user registration, login, and logout.
  - **Frontend Pages:** Created React components for user registration, login, account summary, and financial transactions.
  - **Account Management:** Enabled users to register, log in, view account details, and manage checking and savings balances.
  - **Session Management:** Redirect users based on session status and ensure protected routes are only accessible to logged-in users.



## Assignment 3: Node, Express, Mongo, and RESTful API

<img src="https://github.com/Bradon-Barfuss/Software-Engineering-2/blob/main/Pictures/api.png">

- **Features:**
  - **User Account System:** Create and manage user accounts with profiles, roles, and initial account balances.
  - **Account Tracking:** Track checking and savings account balances with deposit, withdrawal, and transfer functionalities.
  - **RESTful API Routes:** Implement GET and POST routes to handle account creation, authentication, and balance operations.
  - **JSON Data Handling:** All routes accept and return JSON data, ensuring no plain text input or output.



## Assignment 2: Four in a Row Game

<img src="https://github.com/Bradon-Barfuss/Software-Engineering-2/blob/main/Pictures/connectFourPicture.png">

- **Features:**
  - **Game Board:** Implemented a Connect Four board with 6 rows and 7 columns.
  - **Game End:** Identifies when there is a winner or if the game ends in a tie.
  - **Player Switching:** Properly switches turns between players after each move.
  - **Tile Coloring:** Tiles are colored to distinguish between players.

## Assignment 1: Hello World

<img src="https://github.com/Bradon-Barfuss/Software-Engineering-2/blob/main/Pictures/helloworldpicture.png?raw=true">

- **Features:**
  - Set up a development environment with Node.js and Visual Studio Code.
  - Created a basic Express application displaying a "Welcome to Express" page.
  - Followed a tutorial to understand basic Express setup and functionality.
