import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MAP_Project';
  clicked = false;
  currentSquare;

  constructor() {
    this.currentSquare = document.querySelector('.even-row.odd-column');
  }
  check(){
    console.log('logged')
    this.movePawn()
  }

  movePawn() {

    let pawn = document.getElementById('pawn')

    // Function to move the pawn one square at a time
    if (this.currentSquare) {
      const nextSquare = this.currentSquare.nextElementSibling;
      if (nextSquare && pawn && this.currentSquare) {
        nextSquare.appendChild(pawn);
        this.currentSquare = nextSquare;
      }
    }
  }
}
