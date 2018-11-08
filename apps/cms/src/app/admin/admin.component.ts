import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../_services/app-config.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'blog-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public appConfig: AppConfigService,
    public authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.onLogout();
  }

}
