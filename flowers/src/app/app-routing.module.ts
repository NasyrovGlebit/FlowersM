import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlowerComponent} from "./flower/flower.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FlowerListComponent} from "./flower-list/flower-list.component";
import {FlowerEditComponent} from "./flower-edit/flower-edit.component";

const routes: Routes = [
  { path: '*', component: AppComponent },
  { path: 'flowers', component: FlowerListComponent },
  { path: 'flower/:id', component: FlowerComponent },
  { path: 'flower/:id/edit', component: FlowerEditComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
