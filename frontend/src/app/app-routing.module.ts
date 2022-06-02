import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './main/chat/chat.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';


export const routes:Routes=[
  
 
  { path:'login',component:LoginComponent},
  { path:'app-register',component:RegisterComponent},
  { path:'chat',component:ChatComponent},
];


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
