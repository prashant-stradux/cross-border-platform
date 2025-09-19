import { Component } from '@angular/core';
import { MOCK_USER } from '../core/mocks/mock-data';

interface RequestItem {
  id: string;
  client: string;
  amount: number;
  currency: string;
  inrAmount: number;
  requestDate: string;
  status: 'pending' | 'completed' | 'failed' | 'processing';
  shareLink: string;
}

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
  standalone: false
})
export class RequestsComponent {
  user = MOCK_USER;
  
  // Filter states
  selectedCurrency = '';
  selectedStatus = '';
  searchTerm = '';
  
  // Mock requests data
  requests: RequestItem[] = [
    {
      id: 'REQ-001',
      client: 'Acme Corp',
      amount: 1500,
      currency: 'USD',
      inrAmount: 124500,
      requestDate: '2025-01-15',
      status: 'completed',
      shareLink: 'https://pay.swiftmoney.app/r/abc123'
    },
    {
      id: 'REQ-002',
      client: 'TechStart Inc',
      amount: 2500,
      currency: 'USD',
      inrAmount: 207500,
      requestDate: '2025-01-14',
      status: 'processing',
      shareLink: 'https://pay.swiftmoney.app/r/def456'
    },
    {
      id: 'REQ-003',
      client: 'Global Solutions',
      amount: 800,
      currency: 'EUR',
      inrAmount: 72000,
      requestDate: '2025-01-13',
      status: 'pending',
      shareLink: 'https://pay.swiftmoney.app/r/ghi789'
    }
  ];

  filteredRequests: RequestItem[] = this.requests;

  // Pagination
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = this.requests.length;

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get paginatedRequests(): RequestItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredRequests.slice(startIndex, startIndex + this.itemsPerPage);
  }

  applyFilters() {
    this.filteredRequests = this.requests.filter(request => {
      const matchesCurrency = !this.selectedCurrency || request.currency === this.selectedCurrency;
      const matchesStatus = !this.selectedStatus || request.status === this.selectedStatus;
      const matchesSearch = !this.searchTerm || 
        request.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        request.client.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      return matchesCurrency && matchesStatus && matchesSearch;
    });
    
    this.totalItems = this.filteredRequests.length;
    this.currentPage = 1; // Reset to first page
  }

  clearFilters() {
    this.selectedCurrency = '';
    this.selectedStatus = '';
    this.searchTerm = '';
    this.applyFilters();
  }

  exportRequests() {
    // Mock export functionality
    alert('Export functionality will be implemented here');
  }

  createQuickRequest() {
    alert('Quick Request functionality will be implemented here');
  }

  createAdvancedRequest() {
    alert('Advanced Request functionality will be implemented here');
  }

  copyShareLink(link: string) {
    navigator.clipboard.writeText(link);
    alert('Share link copied to clipboard');
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'completed': return 'status-completed';
      case 'processing': return 'status-processing';
      case 'pending': return 'status-pending';
      case 'failed': return 'status-failed';
      default: return '';
    }
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
}
