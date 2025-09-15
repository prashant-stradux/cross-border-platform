import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({ selector: 'app-header', templateUrl: './header.component.html', standalone: false })
export class HeaderComponent implements OnInit, OnDestroy {
  isOpen = false;
  animate = false;
  private animationInterval: any;

  ngOnInit() {
    // Start the automatic animation cycle immediately
    this.startAutomaticAnimation();
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