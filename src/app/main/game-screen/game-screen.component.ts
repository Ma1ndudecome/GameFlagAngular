import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { CountryArr } from '../../interface/CountryArr.interface';
import { NgFor } from '@angular/common';




@Component({
  selector: 'app-game-screen',
  imports: [NavMenuComponent, NgFor],
  templateUrl: './game-screen.component.html',
  styleUrl: './game-screen.component.css'
})
export class GameScreenComponent {
  constructor(){
    this.removeCorrectAnswer()
  }
  countrySelected:string =''
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

   randomItem = this.flagsArr[Math.floor(Math.random()*this.flagsArr.length)]
  
   removeCorrectAnswer():void{
     this.flagsArr = this.flagsArr.filter((el)=>el !== this.randomItem)
   }
    
   onCountrySelected(CountryName:string){
    this.countrySelected = CountryName
   }

   checkValue(){
    console.log(this.countrySelected)
   }
   
}

