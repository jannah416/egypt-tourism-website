import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EgyptDayToursComponent } from './pages/egypt-day-tours/egypt-day-tours.component';
import { LoginComponent } from './pages/login/login.component';
import { WhereToGoComponent } from './pages/where-to-go/where-to-go.component';

export const routes: Routes = [
       {
   path: ''     ,
      component: HomeComponent   ,                                                                                      
     } ,                                                                         
 {
     path: 'home'     ,
     component: HomeComponent   ,                                                                                      
 } ,        
 {
     path: 'contact-us'     ,
     component: ContactUsComponent   ,                                                                                      
 }   , 
 {
     path: 'egypt-day-tours'     ,
     component: EgyptDayToursComponent   ,                                                                                      
 }   , 
 {
     path: 'login'     ,
     component: LoginComponent   ,                                                                                      
 }    ,
 {
     path: 'where-to-go'     ,
     component: WhereToGoComponent  ,                                                                                   
 }   , 
                                                                                    
];
