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
    this.pushRandomCountry()
    this.shuffle(this.arrTake)
    localStorage.setItem("score", String(this.score))
    console.log(this.score)
    
  }
  countrySelected:string =''
  router = inject(Router)
  score:number = 0

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
   arrTake:CountryArr[] = []
   randomItem = this.flagsArr[Math.floor(Math.random()*this.flagsArr.length)]
  
   removeCorrectAnswer():void{
     this.flagsArr = this.flagsArr.filter((el)=>el !== this.randomItem)
   }
    
   onCountrySelected(CountryName:string){
    this.countrySelected = CountryName
   }

   checkValue(){
    if(this.randomItem.name === this.countrySelected){
      this.score += 5
      localStorage.setItem("score", String(this.score))
    }
    this.removeCorrectAnswer()

    this.shuffle(this.flagsArr)

    this.changeRandomCountry()

    this.pushRandomCountry()
    
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
   pushRandomCountry(){
    this.arrTake = []
    this.arrTake.push(this.flagsArr[0])
    this.arrTake.push(this.flagsArr[1])
    this.arrTake.push(this.flagsArr[2])
    this.arrTake.push(this.randomItem)
   }
}
