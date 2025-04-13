import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { NgFor } from '@angular/common';
import { GameLogicComponent } from '../game-logic/game-logic.component';




@Component({
  selector: 'app-game-screen',
  imports: [NavMenuComponent, NgFor, GameLogicComponent],
  templateUrl: './game-screen.component.html',
  styleUrl: './game-screen.component.css'
})
export class GameScreenComponent {
 
   
}

