import { Component } from '@angular/core';
import { MOCK_USER, MOCK_BANK_INR } from '../core/mocks/mock-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: false
})
export class ProfileComponent {
  activeTab = 'general';
  invoiceColor = '#553dd2';

  user = MOCK_USER;
  bankInr = MOCK_BANK_INR;

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  resetColor() {
    this.invoiceColor = '#553dd2';
  }
}
