import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PricingService, PricingTier } from '../../../core/services/pricing.service';

@Component({ selector: 'app-calculator', templateUrl: './calculator.component.html', standalone: false })
export class CalculatorComponent implements OnInit {
  form: FormGroup;
  baseRate = 86.84;
  tiers: PricingTier[] = [];
  result = { gross:0, fee:0, gst:0, net:0, savedAgainstBank:0 };

  constructor(private fb: FormBuilder, private pricing: PricingService) {
    this.form = this.fb.group({ amount: [500], currency: ['USD'], pricingModel: ['tier'] });
  }

  ngOnInit() {
    this.pricing.getRate('USD/INR').subscribe(r => this.baseRate = r.rate);
    this.pricing.getPricingTiers().subscribe(t => this.tiers = t);
    this.form.valueChanges.subscribe(() => this.calculate());
    this.calculate();
  }

  calculate() {
    const v = this.form.value;
    const amount = Number(v.amount) || 0;
    const gross = amount * this.baseRate;

    if (v.pricingModel === 'zeromargin') {
      const feePercent = 1.0;
      const fee = (feePercent/100) * gross;
      const gst = fee * 0.18;
      const net = gross - fee - gst;
      this.result = { gross, fee, gst, net, savedAgainstBank: (gross*0.03) };
    } else {
      const tier = this.tiers.find(t => (t.max===null ? amount>=t.min : amount>=t.min && amount<=t.max));
      let fee = 0;
      if (tier) {
        fee = tier.feeType === 'flat' ? tier.fee : (tier.fee/100)*amount;
      } else {
        fee = 29;
      }
      const feeINR = fee * this.baseRate;
      const gst = feeINR * 0.18;
      const net = gross - feeINR - gst;
      this.result = { gross, fee: feeINR, gst, net, savedAgainstBank: (gross*0.05) };
    }
  }
}