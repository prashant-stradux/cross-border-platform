import { Component } from '@angular/core';

interface IntegrationPlatform {
  id: string;
  name: string;
  logo: string;
  description: string;
  connected: boolean;
  comingSoon?: boolean;
}

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.css'],
  standalone: false
})
export class IntegrationsComponent {
  search = '';

  platforms: IntegrationPlatform[] = [
    {
      id: 'upwork',
      name: 'Upwork',
      logo: 'https://cdn.worldvectorlogo.com/logos/upwork.svg',
      description: 'Sync contracts and invoices. Auto-generate payment links for Upwork clients.',
      connected: false,
      comingSoon: true
    },
    {
      id: 'fiverr',
      name: 'Fiverr',
      logo: 'https://cdn.worldvectorlogo.com/logos/fiverr-1.svg',
      description: 'Pull order details and issue payouts with one click.',
      connected: false,
      comingSoon: true
    },
    {
      id: 'freelancer',
      name: 'Freelancer.com',
      logo: 'https://cdn.worldvectorlogo.com/logos/freelancer-1.svg',
      description: 'Import milestones and request payments directly to your virtual accounts.',
      connected: false,
      comingSoon: true
    },
    {
      id: 'toptal',
      name: 'Toptal',
      logo: 'https://cdn.worldvectorlogo.com/logos/toptal-1.svg',
      description: 'Get paid faster with automated invoice matching and settlement.',
      connected: false,
      comingSoon: true
    },
    {
      id: 'github',
      name: 'GitHub Sponsors',
      logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
      description: 'Route sponsorships to your multi-currency accounts seamlessly.',
      connected: false,
      comingSoon: true
    }
  ];

  get filteredPlatforms() {
    const s = this.search.toLowerCase().trim();
    if (!s) return this.platforms;
    return this.platforms.filter(p => p.name.toLowerCase().includes(s) || p.description.toLowerCase().includes(s));
  }

  toggleConnection(p: IntegrationPlatform) {
    // All integrations are coming soon, keep disabled
    return;
  }
}
