import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface PricingTier { id:string; min:number; max:number|null; feeType:'flat'|'percent'; fee:number; note?:string }

@Injectable({ providedIn: 'root' })
export class PricingService {
  getRate(pair: string): Observable<{ rate:number; source:string; timestamp:string }> {
    return of({ rate: 86.84, source: 'Mock', timestamp: new Date().toISOString() });
  }

  getPricingTiers(): Observable<PricingTier[]> {
    const tiers: PricingTier[] = [
      { id:'t1', min:0, max:2000, feeType:'flat', fee:19 },
      { id:'t2', min:2001, max:10000, feeType:'flat', fee:29 },
      { id:'t3', min:10001, max:null, feeType:'percent', fee:0.3 }
    ];
    return of(tiers);
  }
}