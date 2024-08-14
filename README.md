# Assignment 7: Expanded Banking App

## Frontend

**Features:**

- **Login System:**
  - Requests username, password, and verifies credentials.
  - Supports three company roles: administrator, employee, and customer.

- **Administrator:**
  - Access to all screens.
  - Ability to manage personal bank accounts.
  - Can elevate/demote user roles.

- **Customer:**
  - Unique customer ID assignment.
  - Deposit/withdraw money into savings, checking, and investment accounts.
  - Transfer money between accounts.
  - View full and individual account transaction histories.

- **Employee:**
  - View and manage accounts using customer IDs.
  - Deposit/withdraw money and transfer between customer accounts.

- **UI Requirements:**
  - Consistent theme and CSS styling.
  - Polished interface with aligned and justified elements.
  - Recommended use of Bootstrap or similar frameworks.

**Implementation Details:**

- **Frontend Design:**
  - Built using React for a dynamic user experience.
  - Implemented responsive design for compatibility across devices.
  - Utilized React Router for navigation between pages.

- **Styling:**
  - Applied Bootstrap for a consistent and clean layout.
  - Custom CSS for additional styling and layout adjustments.

- **Data Handling:**
  - Simulated backend functionality with dummy data for testing purposes.
  - Ensured navigability and functionality without a fully integrated backend.

## Backend

**Features:**

- **Login System:**
  - SHA-256 hashing for password security.
  - Error message for incorrect credentials without revealing details.

- **Role Management:**
  - Administrators can access all functionalities and manage user roles.
  - Ability for role assignment and modification.

- **Account Management:**
  - Unique customer ID for each user.
  - Functionality for deposit/withdrawal and transfer operations.
  - Full and individual account transaction histories.

- **Employee Capabilities:**
  - View and manage accounts using customer IDs.
  - Facilitate money transfers between accounts.

- **Account Creation:**
  - Only employees and administrators can create new accounts.

**Implementation Details:**

- **Backend Setup:**
  - Developed with Node.js and Express for handling requests and responses.
  - Utilized MongoDB for data storage and management.

- **Password Security:**
  - Implemented SHA-256 hashing for passwords to ensure security.
  - Set up routes for secure login and account management.

- **Data Handling:**
  - Stored user information, transaction histories, and account details in MongoDB.
  - Implemented error handling and data validation within the backend logic.

- **Testing:**
  - Used dummy data for initial testing and verification of backend functionalities.
  - Ensured smooth integration with the frontend components.

## Assignment 6: Hangman Game

<img src="https://github.com/Bradon-Barfuss/C-Sharp-Programs/raw/main/Students%20Grades/picture.png" alt="Image" align="right" width="400">

- **Features:**
  - **User Interaction:** Users start by entering their name, then play a traditional Hangman game.
  - **Game Logic:** Users guess letters to reveal the hidden word or face the progression of the hangman. Incorrect guesses are tracked and shown.
  - **High Scores:** Stores and displays the top 10 high scores for words of similar length, showing player names, number of guesses, and word length.
  - **Session Management:** Uses sessions to store user names after successful games and manages gameplay without prompting for the username again.

- **Implementation Details:**
  - **Frontend:** Developed with React to handle user interactions and display game status, high scores, and replay options.
  - **Backend:** Implemented with Express to manage game logic, handle sessions, and interact with MongoDB for storing words and scores.
  - **Database:** MongoDB stores a list of at least 1000 words, randomly selecting words for each game. High scores are recorded and queried from the database.
  - **Game Flow:** Randomly chosen words are hidden from the client until the end of the game. After a game, the top 10 high scores for the word's length are displayed. Users are given an option to play again.


## Assignment 5: MERN and Sessions

<img src="https://github.com/Bradon-Barfuss/C-Sharp-Programs/raw/main/Students%20Grades/picture.png" alt="Image" align="right" width="400">

- **Features:**
  - **User Sessions:** Implemented session tracking for user registration, login, and logout.
  - **Frontend Pages:** Created React components for user registration, login, account summary, and financial transactions.
  - **Account Management:** Enabled users to register, log in, view account details, and manage checking and savings balances.
  - **Session Management:** Redirect users based on session status and ensure protected routes are only accessible to logged-in users.

- **Implementation Details:**
  - **Backend:** Added session handling for registration and login routes. Implemented a logout route to destroy sessions.
  - **Frontend:** Developed React pages for account registration, login, and account summary. Integrated forms for user interaction and financial transactions.
  - **Session Handling:** Used session ID to track user authentication status across pages. Ensured unauthorized users are redirected to the login page.
  - **Transaction Management:** Enabled deposit and withdrawal functionality with basic validation.


## Assignment 4: Node, Express, Mongo, and RESTful API

<img src="" alt="Image" align="right" width="400">

- **Features:**
  - **User Account System:** Create and manage user accounts with profiles, roles, and initial account balances.
  - **Account Tracking:** Track checking and savings account balances with deposit, withdrawal, and transfer functionalities.
  - **RESTful API Routes:** Implement GET and POST routes to handle account creation, authentication, and balance operations.
  - **JSON Data Handling:** All routes accept and return JSON data, ensuring no plain text input or output.

- **Implementation Details:**
  - **Backend Setup:** Created a Node/Express server with MongoDB integration for storing user data and account details.
  - **Account Management:** Implemented routes to create accounts, authenticate users, retrieve user data, and update account roles.
  - **Financial Transactions:** Developed routes for depositing, withdrawing, and transferring funds within accounts.
  - **Testing:** Utilized RESTful API tools like Postman to verify and debug the routes.
  - **No Frontend Required:** Focused on backend functionality; frontend development is deferred to future assignments.


## Assignment 3: Four in a Row Game

<img src="" alt="Image" align="left" width="400">

- **Features:**
  - **Game Board:** Implemented a Connect Four board with 6 rows and 7 columns.
  - **Game End:** Identifies when there is a winner or if the game ends in a tie.
  - **Player Switching:** Properly switches turns between players after each move.
  - **Tile Coloring:** Tiles are colored to distinguish between players.

- **Implementation Details:**
  - **Board Setup:** Created a 6x7 grid for the Connect Four game board.
  - **Tile Mechanics:** Implemented logic to handle tile placement and ensure it falls to the lowest available spot.
  - **Win and Tie Conditions:** Developed algorithms to check for winning conditions and detect game ties.


## Assignment 2: Node/Express Site with File Storage

<img src="" alt="Image" align="left" width="400">

- **Features:**
  - **Data Submission:** One HTML page with a form to collect a first name, last name, and favorite food, which sends data to a backend route for storage.
  - **Data Display:** A route generates and serves an HTML page that displays all entries stored in a text file.
  - **Filtered Display:** Another HTML page allows users to submit a food preference and shows all entries matching that food.
  - **Clean Layout:** Organized routes and pages into separate folders for clarity.

- **Implementation Details:**
  - **HTML Forms:** Created forms for data submission and query.
  - **File Storage:** Implemented backend routes to write data to and read data from a text file.
  - **HTML Generation:** Used backend routes to dynamically generate and send HTML content based on file data.
  - **Routing and Organization:** Structured routes and HTML pages in a well-organized directory structure.


## Assignment 1: Node and Express

<img src="" alt="Image" align="left" width="400">

- **Features:**
  - Set up a development environment with Node.js and Visual Studio Code.
  - Created a basic Express application displaying a "Welcome to Express" page.
  - Followed a tutorial to understand basic Express setup and functionality.

- **Implementation Details:**
  - **Environment Setup:** Installed Node.js and Visual Studio Code.
  - **Tutorial:** Completed a Node.js tutorial to configure Express and display a basic webpage.
  - **Stopping Point:** Ensured the localhost server displays the "Welcome to Express" page.
