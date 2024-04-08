import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListWorkersComponent } from './components/list-workers/list-workers.component';
import { AddWorkerComponent } from './components/add-worker/add-worker.component';

const routes: Routes = [
  {path: 'workers', component: ListWorkersComponent},
  {path: 'addworker', component: AddWorkerComponent},
  {path: 'editworker/:id', component: AddWorkerComponent},
  {path: '', redirectTo: '/workers', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListWorkersComponent,
    AddWorkerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
