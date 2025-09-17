import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  standalone: false
})
export class SidenavComponent {
  @Input() userName: string = 'ISHAN MAHENDRABHAI SH...';
  @Input() userEmail: string = 'mail2ishanshah@gmail.com';

  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}


