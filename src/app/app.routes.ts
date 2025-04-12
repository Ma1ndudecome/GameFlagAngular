import { Routes } from '@angular/router';
import { StartScreenComponent } from './main/start-screen/start-screen.component';
import { GameScreenComponent } from './main/game-screen/game-screen.component';
import { GameOverComponent } from './game-over/game-over.component';

export const routes: Routes = [
    {
        path:'', component:StartScreenComponent
    },
    {
        path:'Game', component:GameScreenComponent
    },
    {
        path: 'Game-Over', component:GameOverComponent
    }
];
