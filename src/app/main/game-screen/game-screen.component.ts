import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { CountryArr } from '../../interface/CountryArr.interface';

@Component({
  selector: 'app-game-screen',
  imports: [NavMenuComponent],
  templateUrl: './game-screen.component.html',
  styleUrl: './game-screen.component.css'
})
export class GameScreenComponent {
   flagsArr:CountryArr[] = [
    {
      img:"assets/img/afganistan.webp", 
      name:"Afganistan"
    },
    {
      img:"assets/img/armenia.webp", 
      name:"Afganistan"
    },
    {
      img:"assets/img/Chexia.webp", 
      name:"Afganistan"
    },
    {
      img:"assets/img/Egupit.webp", 
      name:"Afganistan"
    },
    {
      img:"assets/img/Germany.webp", 
      name:"Afganistan"
    },
    {
      img:"assets/img/India.webp", 
      name:"Afganistan"
    },
    {
      img:"assets/img/italy.webp", 
      name:"Afganistan"
    },
    {
      img:"assets/img/Japan.webp", 
      name:"Afganistan"
    },
    {
      img:"assets/img/Poland.webp", 
      name:"Afganistan"
    },
    {
      img:"assets/img/potato.webp", 
      name:"Afganistan"
    },
    {
      img:"assets/img/Roman.webp", 
      name:"Afganistan"
    },
   ]
}
