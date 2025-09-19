import { Component } from '@angular/core';
import { MOCK_DASHBOARD, MOCK_TRANSACTIONS, MOCK_BANK_USD, MOCK_USER } from '../core/mocks/mock-data';
import { ActivityItem } from '../shared/components/activity-modal/activity-modal.component';

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

  // User (for sidenav)
  user = MOCK_USER;

  // Recent activity
  transactions: TransactionItem[] = MOCK_TRANSACTIONS;

  // Modal state
  isActivityModalOpen = false;

  copiedField: string | null = null;

  copy(value: string, fieldKey: string) {
    navigator.clipboard.writeText(value).then(() => {
      this.copiedField = fieldKey;
      setTimeout(() => (this.copiedField = null), 1500);
    });
  }

  generatePaymentLink(): void {
    const link = `https://pay.swiftmoney.app/r/${Math.random().toString(36).slice(2, 8)}`;
    navigator.clipboard.writeText(link);
    alert('Payment link copied to clipboard');
  }

  openActivityModal(): void {
    this.isActivityModalOpen = true;
  }

  closeActivityModal(): void {
    this.isActivityModalOpen = false;
  }

  // Convert transactions to ActivityItem format for modal
  get activitiesForModal(): ActivityItem[] {
    return this.transactions.map(t => ({
      id: t.id,
      type: t.type,
      currency: t.currency,
      amount: t.amount,
      description: t.description,
      timestamp: t.timestamp,
      status: t.status
    }));
  }
}


