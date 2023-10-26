# 8-Queens Puzzle Solver

This web application is designed to solve the classic 8-Queens puzzle, a chess puzzle where you must place 8 queens on an 8x8 chessboard without any of them attacking each other.

## Table of Contents

- [Algorithm](#algorithm)
- [Solving the 8-Queens Problem](#solving-the-8-queens-problem)
- [Development Process](#development-process)
- [Usage](#usage)
- [Customization](#customization)

## Algorithm

The application uses a backtracking algorithm to solve the 8-Queens puzzle. The algorithm works by recursively trying to place queens on the chessboard, row by row. It checks if the current placement is valid (no two queens can attack each other), and if so, it proceeds to the next row. If a valid solution is found, it is displayed to the user.

### The 8-Queens Puzzle

The 8-Queens puzzle is a classic chess puzzle that challenges you to place eight queens on an 8x8 chessboard in a way that no two queens can attack each other. Queens can move horizontally, vertically, and diagonally. Finding a valid placement for all eight queens is a non-trivial problem that requires careful consideration.

### Backtracking Algorithm

The backtracking algorithm used in this application systematically explores possible queen placements and checks for validity. It proceeds row by row, placing queens and verifying that they do not threaten each other. When a valid solution is found, it is displayed to the user. If no solution exists for a particular configuration, the algorithm backtracks to explore other possibilities.

## Development Process

## Development Process

Here is an overview of the development process of this web page:

1. **Setting up the Project**: The project is created using Angular, a popular JavaScript framework for building web applications. Angular CLI is used for project scaffolding.

2. **Creating the Chessboard**: A responsive 8x8 chessboard is generated using Angular components and HTML/CSS.

3. **Implementing the Algorithm**: The backtracking algorithm for solving the 8-Queens puzzle is implemented in TypeScript. It checks for valid queen placements and backtracks when necessary.

4. **User Interaction**: The application allows users to manually place queens on the chessboard, validate their placements, and find solutions.

5. **Dark Mode Toggle**: A Dark Mode toggle is added to the page for user customization.

6. **Styling and Layout**: CSS styles are applied to make the chessboard and switch component visually appealing. Flexbox is used to center the content.

7. **Testing and Debugging**: The application is thoroughly tested to ensure correct functionality and responsiveness.

8. **Documentation**: The code is documented to make it clear and maintainable. This README serves as project documentation.

9. **Deployment**: The application is built and deployed to a web server, making it accessible to users.

## Usage

To use the 8-Queens Puzzle Solver, follow these steps:

1. Access the web page through your web browser.

2. Manually place queens on the chessboard by clicking on the squares.

3. Click the "Check" button to validate your placement. The system will inform you if the placement is a valid solution.

4. Click the "Reset" button to clear the chessboard and start over.

5. Toggle the "Dark Mode" switch to change the page's color scheme.

## Customization

- The chessboard can be customized by adjusting its styles in the CSS.

- The Dark Mode switch can be customized by modifying its appearance using CSS.

- Further features can be added, such as an automatic solver or additional puzzles.

Feel free to explore and customize the application according to your needs.

Enjoy solving the 8-Queens puzzle!
