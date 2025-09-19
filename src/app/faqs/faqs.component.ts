import { Component } from '@angular/core';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
  standalone: false
})
export class FAQsComponent {
  selectedCategory = 'all';
  searchTerm = '';

  categories = [
    { value: 'all', label: 'All Questions' },
    { value: 'general', label: 'General' },
    { value: 'transfers', label: 'Money Transfers' },
    { value: 'compliance', label: 'Compliance & Laws' },
    { value: 'fees', label: 'Fees & Limits' },
    { value: 'security', label: 'Security' }
  ];

  faqs: FAQItem[] = [
    {
      id: '1',
      question: 'What is SwiftMoney and how does it work?',
      answer: 'SwiftMoney is a cross-border money transfer platform that enables individuals and businesses to send and receive money internationally. We provide virtual accounts in multiple currencies, allowing you to receive payments from clients worldwide and convert them to Indian Rupees at competitive rates.',
      category: 'general'
    },
    {
      id: '2',
      question: 'Which currencies are supported for international transfers?',
      answer: 'We support major currencies including USD, EUR, GBP, CAD, AUD, and many more. You can receive payments in these currencies through your virtual accounts and convert them to INR as needed.',
      category: 'transfers'
    },
    {
      id: '3',
      question: 'What are the RBI regulations for cross-border money transfers?',
      answer: 'All cross-border transfers must comply with RBI guidelines under the Foreign Exchange Management Act (FEMA). Individual transfers up to $250,000 per financial year are allowed under the Liberalized Remittance Scheme (LRS). Business transfers require proper documentation and may need RBI approval for amounts exceeding certain thresholds.',
      category: 'compliance'
    },
    {
      id: '4',
      question: 'What documents are required for international money transfers?',
      answer: 'For individual transfers: PAN card, Aadhaar card, bank account details, and purpose declaration. For business transfers: Company registration documents, GST certificate, bank statements, and detailed transaction purpose. Additional documents may be required based on transfer amount and purpose.',
      category: 'compliance'
    },
    {
      id: '5',
      question: 'What are the fees for international transfers?',
      answer: 'Our fees are transparent and competitive. We charge 1% of the transfer amount for most currencies, with a minimum fee of ₹100. Exchange rates are updated in real-time and include a small margin. No hidden charges apply.',
      category: 'fees'
    },
    {
      id: '6',
      question: 'How long do international transfers take?',
      answer: 'Transfer times vary by destination and currency. USD transfers typically take 1-2 business days, while other currencies may take 2-5 business days. Processing time depends on banking hours, holidays, and compliance verification.',
      category: 'transfers'
    },
    {
      id: '7',
      question: 'What is the Liberalized Remittance Scheme (LRS)?',
      answer: 'LRS allows Indian residents to remit up to $250,000 per financial year for various purposes including education, medical treatment, gifts, and investments. All LRS transactions must be reported to RBI and are subject to applicable taxes.',
      category: 'compliance'
    },
    {
      id: '8',
      question: 'How secure are international money transfers?',
      answer: 'We use bank-grade encryption, multi-factor authentication, and comply with international security standards. All transactions are monitored for suspicious activity and reported to relevant authorities as required by law.',
      category: 'security'
    },
    {
      id: '9',
      question: 'Can I send money for business purposes?',
      answer: 'Yes, business transfers are supported but require additional documentation. You must provide business registration, GST details, and clear transaction purpose. Large amounts may require RBI approval and additional compliance checks.',
      category: 'transfers'
    },
    {
      id: '10',
      question: 'What are the tax implications of international transfers?',
      answer: 'Tax implications depend on the purpose and amount of transfer. Gifts above ₹50,000 may be taxable. Business income is subject to applicable tax rates. We recommend consulting a tax advisor for specific situations.',
      category: 'compliance'
    },
    {
      id: '11',
      question: 'How do I track my international transfer?',
      answer: 'You can track your transfer status in real-time through your SwiftMoney dashboard. We provide transaction IDs, bank reference numbers, and regular updates via email and SMS.',
      category: 'transfers'
    },
    {
      id: '12',
      question: 'What happens if my transfer is delayed or rejected?',
      answer: 'If a transfer is delayed, we investigate and provide updates. If rejected, funds are returned to your account within 2-3 business days. Common rejection reasons include incorrect beneficiary details or compliance issues.',
      category: 'transfers'
    },
    {
      id: '13',
      question: 'Are there limits on transfer amounts?',
      answer: 'Individual limits are $250,000 per year under LRS. Business limits depend on your account type and compliance status. We may impose additional limits based on risk assessment and regulatory requirements.',
      category: 'fees'
    },
    {
      id: '14',
      question: 'How do I set up a virtual account?',
      answer: 'Setting up a virtual account is simple. Complete KYC verification, provide required documents, and choose your preferred currencies. Virtual accounts are typically activated within 24-48 hours after verification.',
      category: 'general'
    },
    {
      id: '15',
      question: 'What is KYC and why is it required?',
      answer: 'Know Your Customer (KYC) is a regulatory requirement to verify customer identity and prevent money laundering. We collect identity proof, address proof, and other documents as mandated by RBI and international regulations.',
      category: 'compliance'
    }
  ];

  get filteredFAQs(): FAQItem[] {
    let filtered = this.faqs;

    // Filter by category
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === this.selectedCategory);
    }

    // Filter by search term
    if (this.searchTerm.trim()) {
      const search = this.searchTerm.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(search) || 
        faq.answer.toLowerCase().includes(search)
      );
    }

    return filtered;
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
  }

  onSearchChange(search: string) {
    this.searchTerm = search;
  }

  getCategoryLabel(category: string): string {
    const cat = this.categories.find(c => c.value === category);
    return cat ? cat.label : category;
  }
}
