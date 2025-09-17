import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { CalculatorComponent } from './shared/components/calculator/calculator.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

import { PricingService } from './core/services/pricing.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, CalculatorComponent, SidenavComponent, HomeComponent, LoginComponent, SignupComponent, DashboardComponent, ProfileComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [PricingService],
  bootstrap: [AppComponent]
})
export class AppModule { }