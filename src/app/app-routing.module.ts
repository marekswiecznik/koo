import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { ActionsComponent } from './actions/actions.component';
import { ActionComponent } from './action/action.component';
import { NewActionComponent } from './newaction/newaction.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'people/:page', component: PeopleComponent },
  { path: 'person/:id', component: PersonComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'actions/:page', component: ActionsComponent },
  { path: 'action/:id', component: ActionComponent },
  { path: 'newaction', component: NewActionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
