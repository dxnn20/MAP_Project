import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  chessboard: any[][] = Array(8).fill([]).map(() => Array(8).fill(''));
  title = 'MAP_Project';
  clicked = false;

  // Define the pawn position (row and column)
  pawnPosition = {
    row: 0,
    col: 0 // Change this to set the initial position of the pawn
  };

  isDarkSquare(row: number, col: number): boolean {
    // Implement your logic to determine if a square is dark or light
    return (row + col) % 2 === 1;
  }

  initialiseBoard() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.chessboard[i][j] = 0;
      }
    }
  }

  queensProblem() {
    this.clicked = true;
    this.initialiseBoard();
    if (this.placeQueens(0) == false) {
      alert("No solution found");
    } else {
      alert("Solution found");
      this.logChessboard();
    }
  }

  isSafe(row: number, col: number): boolean {
    // Check the same column
    for (let i = 0; i < row; i++) {
      if (this.chessboard[i][col] === 1) {
        return false;
      }
    }

    // Check upper left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (this.chessboard[i][j] === 1) {
        return false;
      }
    }

    // Check upper right diagonal
    for (let i = row, j = col; i >= 0 && j < 8; i--, j++) {
      if (this.chessboard[i][j] === 1) {
        return false;
      }
    }

    return true; // It's safe to place a queen in this position
  }

  placeQueens(row: number): boolean {
    if (row === 8) {
      // All queens are placed
      return true;
    }

    for (let col = 0; col < 8; col++) {
      if (this.isSafe(row, col)) {
        this.chessboard[row][col] = 1;
        if (this.placeQueens(row + 1)) {
          return true;
        }
        this.chessboard[row][col] = 0; // Backtrack
      }
    }
    return false;
  }

  logChessboard() {
    console.log(this.chessboard);
  }
}
