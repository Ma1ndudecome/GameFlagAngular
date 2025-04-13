import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { CountryArr } from '../../interface/CountryArr.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-logic',
  imports: [NgFor],
  templateUrl: './game-logic.component.html',
  styleUrl: './game-logic.component.css'
})
export class GameLogicComponent {
  constructor(){
    this.shuffle(this.flagsArr)
    this.removeCorrectAnswer()
  }
  countrySelected:string =''
  router = inject(Router)

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
    this.removeCorrectAnswer()

    this.shuffle(this.flagsArr)

    this.changeRandomCountry()
    
    if(this.flagsArr.length === 3){
      this.router.navigate(['/Game-Over'])
    }
   }

   shuffle(arr:CountryArr[]){
    arr.sort(()=>Math.random() - 0.5)
   }

   changeRandomCountry(){
      this.randomItem = this.flagsArr[Math.floor(Math.random()*this.flagsArr.length)]
   }
}
