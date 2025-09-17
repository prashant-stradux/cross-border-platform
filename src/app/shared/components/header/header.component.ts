import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector: 'app-header', templateUrl: './header.component.html', standalone: false })
export class HeaderComponent implements OnInit, OnDestroy {
  isOpen = false;
  animate = false;
  private animationInterval: any;
  isLoggedIn = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    // Start the automatic animation cycle immediately
    this.startAutomaticAnimation();
    this.isLoggedIn = this.auth.isLoggedIn;
    this.auth.isLoggedIn$.subscribe(v => this.isLoggedIn = v);
  }

  ngOnDestroy() {
    // Clean up the interval when component is destroyed
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  toggle() { 
    this.isOpen = !this.isOpen; 
  }

  private startAutomaticAnimation() {
    // Automatically toggle between dollar and rupee every 2.5 seconds
    this.animationInterval = setInterval(() => {
      this.animate = !this.animate;
    }, 2500);
  }
}