import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { CalculatorComponent } from './shared/components/calculator/calculator.component';

import { PricingService } from './core/services/pricing.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, CalculatorComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [PricingService],
  bootstrap: [AppComponent]
})
export class AppModule { }