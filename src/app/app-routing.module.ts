import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharacterCreateComponent } from './characters/character-create/character-create.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'characters', pathMatch: 'full' },
      { path: 'characters', component: CharacterListComponent },
      { path: 'characters/create', component: CharacterCreateComponent },
      { path: 'characters/:id', component: CharacterDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
