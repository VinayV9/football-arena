import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArenaComponent } from './components/arena/arena.component';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'arena', component: ArenaComponent },
  { path: 'player', component: PlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
