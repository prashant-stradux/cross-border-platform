import { Component } from '@angular/core';

interface PlanFeature {
  label: string;
  swiftmoney: string | number | boolean;
  competitorA: string | number | boolean;
  competitorB: string | number | boolean;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
  standalone: false
})
export class PricingComponent {
  fxRate = 'Real-time FX + 0.25%';
  transferFee = '1% (min ₹100)';

  features: PlanFeature[] = [
    { label: 'Account opening', swiftmoney: 'Free', competitorA: '₹999', competitorB: '₹499' },
    { label: 'Monthly fee', swiftmoney: '₹0', competitorA: '₹499', competitorB: '₹299' },
    { label: 'Virtual accounts (USD/EUR/GBP)', swiftmoney: 'Included', competitorA: 'Add-on', competitorB: 'Limited' },
    { label: 'e-FIRS / FIRA docs', swiftmoney: 'Instant', competitorA: 'Manual + delays', competitorB: 'Manual' },
    { label: 'Support SLA', swiftmoney: 'Under 5 mins', competitorA: '24 hours', competitorB: '12 hours' }
  ];
}
