export interface MockUser {
  name: string;
  email: string;
  phone: string;
  referredBy?: string;
}

export interface MockBankDetails {
  currency: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  routingNumber?: string;
  iban?: string;
  ifsc?: string;
}

export interface MockDashboardSummary {
  totalBalanceUsd: number;
  pendingUsd: number;
  lastDepositUsd: number;
}

export interface MockTransaction {
  id: string;
  type: 'deposit' | 'payment' | 'refund' | 'fee';
  currency: string;
  amount: number;
  description: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
}

export const MOCK_USER: MockUser = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  phone: '+1-555-0100',
  referredBy: 'sam.manager@example.com'
};

export const MOCK_BANK_USD: MockBankDetails = {
  currency: 'USD',
  bankName: 'Example Bank, N.A.',
  accountName: 'Alex Doe',
  accountNumber: '000123456789',
  routingNumber: '026000000',
  iban: 'GB00 EXAM 0000 0000 0000 00'
};

export const MOCK_BANK_INR: MockBankDetails = {
  currency: 'INR',
  bankName: 'Example Bank of India',
  accountName: 'Alex Doe',
  accountNumber: '72760000000000',
  ifsc: 'EXAMPL000001'
};

export const MOCK_DASHBOARD: MockDashboardSummary = {
  totalBalanceUsd: 12430.75,
  pendingUsd: 820.0,
  lastDepositUsd: 1450.0
};

export const MOCK_TRANSACTIONS: MockTransaction[] = [
  { id: 't1', type: 'deposit', currency: 'USD', amount: 1450, description: 'Deposit in Virtual Account', timestamp: '2025-09-15 10:24', status: 'completed' },
  { id: 't2', type: 'payment', currency: 'USD', amount: 320, description: 'Payment from Acme LLC', timestamp: '2025-09-14 16:02', status: 'completed' },
  { id: 't3', type: 'payment', currency: 'USD', amount: 500, description: 'Payment from Globex', timestamp: '2025-09-13 12:10', status: 'pending' },
  { id: 't4', type: 'fee', currency: 'USD', amount: 10, description: 'Processing Fee', timestamp: '2025-09-13 12:11', status: 'completed' }
];
