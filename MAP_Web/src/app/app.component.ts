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
  clicked2 = false;
  clicked3 = false;
  startButton= 'Start';
  manualButton = 'Solve Manually'
  checkButton = 'Check'
  breakButton = 'Break'
  isDarkMode: boolean = false;

  // Define the pawn position (row and column)

  isDarkSquare(row: number, col: number): boolean {
    // Implement your logic to determine if a square is dark or light
    return (row + col) % 2 === 1;
  }

  solveManually(){

    let count  = 0
    this.logChessboard()

    for(let i = 0; i < 8 ;i++)
      for(let j = 0; j < 8 ;j++) {
        if(this.chessboard[i][j] == 1){
          count++;
        }

        if ((this.chessboard[i][j] == 1) && (!this.isSafe(i, j))) {
          alert(`Error at indexes: ${i}, ${j}`);
          return
        }
      }

    if (count !== 8) {
      alert("You need to place exactly 8 queens.");
      return;
    }
    alert("You found a solution!!!");

  }

  initialiseBoard() {
    for (let i = 0; i < 8; i++)
      for (let j = 0; j < 8; j++)
        this.chessboard[i][j] = 0

  }

  queensProblem() {

    this.initialiseBoard();
    if (!this.placeQueens(0)) {
      alert("No solution found")
    } else {
      alert("Solution found!")
    }

    this.logChessboard()

  }

  resetGame(){
    this.startButton = 'Start'
    this.breakButton = 'Break'
    this.checkButton = 'Check'
    this.manualButton = 'Solve Manually'
    this.clicked3 = false;
    this.clicked2 = false;
    this.clicked = false;
    this.initialiseBoard()
  }
  isSafe(row: number, col: number): boolean {

    // Check the same column
    for (let i = 0; i < row; i++)
      if (this.chessboard[i][col] === 1 && i != row) {
        console.log("Same column")
        return false;
      }

    // Check upper left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
      if (this.chessboard[i][j] === 1 && i != row && j != col){
        console.log("Upper left diagonal")
        return false;
      }

    // Check upper right diagonal
    for (let i = row, j = col ; i >= 0 && j < 8; i--, j++)
      if (this.chessboard[i][j] === 1&& i != row) {
        console.log("Upper right diagonal")
        return false;
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

  toggleDarkMode(){
    this.isDarkMode = !this.isDarkMode

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      console.log('ADDED CLASS')
    } else {
      document.body.classList.remove('dark-mode');
      console.log('REMOVED CLASS')
    }
  }
}
