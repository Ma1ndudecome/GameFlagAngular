import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';


@Component({
  selector: 'app-start-screen',
  imports: [NavMenuComponent],
  standalone:true,
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.css'
})
export class StartScreenComponent {
  router = inject(Router)
  
    startGame(){
      this.router.navigate(['/Game'])
    }
}
