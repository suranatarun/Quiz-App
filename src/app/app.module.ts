import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    WelcomeHomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'Home', component: HomeComponent },
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home/Login', component: LoginComponent },
      { path: 'Home/Sign-Up', component: SignUpComponent },
      { path: 'Home/Welcome-Home', component: WelcomeHomeComponent},
      { path: '*', component: NotFoundComponent },
      { path: '**', component: NotFoundComponent },
      { path: '***', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
