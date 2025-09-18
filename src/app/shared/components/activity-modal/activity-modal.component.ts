import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ActivityItem {
  id: string;
  type: 'deposit' | 'payment' | 'refund' | 'fee';
  currency: string;
  amount: number;
  description: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
}

@Component({
  selector: 'app-activity-modal',
  templateUrl: './activity-modal.component.html',
  styleUrls: ['./activity-modal.component.css'],
  standalone: false
})
export class ActivityModalComponent {
  @Input() activities: ActivityItem[] = [];
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  // Pagination
  currentPage = 1;
  itemsPerPage = 10;

  get totalPages(): number {
    return Math.ceil(this.activities.length / this.itemsPerPage);
  }

  get paginatedActivities(): ActivityItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.activities.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalItems(): number {
    return this.activities.length;
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  closeModal() {
    this.close.emit();
  }

  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
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

  getTypeIcon(type: string): string {
    switch (type) {
      case 'deposit': return '⬇';
      case 'payment': return '💵';
      case 'refund': return '↩';
      case 'fee': return '⚙';
      default: return '📄';
    }
  }
}
