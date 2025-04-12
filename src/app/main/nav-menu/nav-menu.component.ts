import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  router = inject(Router)

  SwitchToHome(){
    this.router.navigate([""])
  }
  SwitchToGame(){
    this.router.navigate(["/Game"])
  }
  SwitchToResult(){
    this.router.navigate(["/Game-Over"])
  }
}
