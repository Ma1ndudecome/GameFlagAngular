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
      name:"Armenia"
    },
    {
      img:"assets/img/Chexia.webp", 
      name:"Chexia"
    },
    {
      img:"assets/img/Egupit.webp", 
      name:"Egipyt"
    },
    {
      img:"assets/img/Germany.webp", 
      name:"Germany"
    },
    {
      img:"assets/img/India.webp", 
      name:"India"
    },
    {
      img:"assets/img/italy.webp", 
      name:"italy"
    },
    {
      img:"assets/img/Japan.webp", 
      name:"Japan"
    },
    {
      img:"assets/img/Poland.webp", 
      name:"Poland"
    },
    {
      img:"assets/img/potato.webp", 
      name:"Belarus"
    },
    {
      img:"assets/img/Roman.webp", 
      name:"Roman"
    },
   ]
}
