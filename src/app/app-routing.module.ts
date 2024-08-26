import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComicsComponent } from './components/comics/comics.component';
import { CharactersComponent } from './components/characters/characters.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'comics/:characterId', component: ComicsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
