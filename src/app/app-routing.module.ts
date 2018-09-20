import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';

import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '', component: TasksComponent
  },
  { path: 'tasks', component: TasksComponent },
  { path: '**', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
