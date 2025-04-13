import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { score } from '../main/game-logic/game-logic.component';
@Component({
  selector: 'app-game-over',
  imports: [],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.css'
})
export class GameOverComponent {
  public counerFinalScore = score
  
  
  public router = inject(Router);
  PlayAgait(){
    this.router.navigate(['/Game']);
  };
  Home(){
    this.router.navigate(['']);
  };
}
