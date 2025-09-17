import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: false
})
export class ProfileComponent {
  activeTab = 'general';
  invoiceColor = '#553dd2';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  resetColor() {
    this.invoiceColor = '#553dd2';
  }
}
