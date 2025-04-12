import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-over',
  imports: [],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.css'
})
export class GameOverComponent {
  public counerFinalScore = Math.floor(Math.random() * 100);

  public router = inject(Router);
  PlayAgait(){
    this.router.navigate(['/Game']);
  };
  Home(){
    this.router.navigate(['/Home']);
  };
}
