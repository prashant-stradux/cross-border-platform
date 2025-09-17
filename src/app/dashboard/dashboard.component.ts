import { Component } from '@angular/core';
import { MOCK_DASHBOARD, MOCK_TRANSACTIONS, MOCK_BANK_USD } from '../core/mocks/mock-data';

interface TransactionItem {
  id: string;
  type: 'deposit' | 'payment' | 'refund' | 'fee';
  currency: string;
  amount: number; // positive values
  description: string;
  timestamp: string; // ISO or pretty string
  status: 'completed' | 'pending' | 'failed';
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {
  // Balances
  totalBalanceUsd = MOCK_DASHBOARD.totalBalanceUsd;
  pendingUsd = MOCK_DASHBOARD.pendingUsd;
  lastDepositUsd = MOCK_DASHBOARD.lastDepositUsd;

  // Account details
  account = MOCK_BANK_USD;

  // Recent activity
  transactions: TransactionItem[] = MOCK_TRANSACTIONS;

  copiedField: string | null = null;

  copy(value: string, fieldKey: string) {
    navigator.clipboard.writeText(value).then(() => {
      this.copiedField = fieldKey;
      setTimeout(() => (this.copiedField = null), 1500);
    });
  }

  generatePaymentLink(): void {
    const link = `https://pay.stradux.app/r/${Math.random().toString(36).slice(2, 8)}`;
    navigator.clipboard.writeText(link);
    alert('Payment link copied to clipboard');
  }
}


