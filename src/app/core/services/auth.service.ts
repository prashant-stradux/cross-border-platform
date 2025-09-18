import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'swiftmoney:isLoggedIn';
  private readonly loggedIn$ = new BehaviorSubject<boolean>(this.readPersisted());

  get isLoggedIn$(): Observable<boolean> { return this.loggedIn$.asObservable(); }
  get isLoggedIn(): boolean { return this.loggedIn$.value; }

  login(): void {
    this.loggedIn$.next(true);
    localStorage.setItem(this.storageKey, 'true');
  }

  logout(): void {
    this.loggedIn$.next(false);
    localStorage.removeItem(this.storageKey);
  }

  private readPersisted(): boolean {
    return localStorage.getItem(this.storageKey) === 'true';
  }
}


