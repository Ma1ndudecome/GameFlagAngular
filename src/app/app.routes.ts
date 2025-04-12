import { Routes } from '@angular/router';
import { StartScreenComponent } from './main/start-screen/start-screen.component';
import { GameScreenComponent } from './main/game-screen/game-screen.component';

export const routes: Routes = [
    {
        path:'', component:StartScreenComponent
    },
    {
        path:'Game', component:GameScreenComponent
    },
    
];
