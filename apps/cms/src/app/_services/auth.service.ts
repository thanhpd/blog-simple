import { Injectable } from '@angular/core';
import { UserCredentials } from '../_models';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { Utils } from '../_utils/utils';

const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get isLoggedIn() {
    return this.storageService.isItemExisting(USER);
  }

  get user() {
    const user = this.storageService.getDataObject<UserCredentials>(USER);
    console.log(user);
    return user;
  }

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }

  onLogin(credentials: UserCredentials) {
    if (credentials.username === 'demo' && credentials.password === 'demo') {
      this.storageService.setItem(USER, Utils.jsonStringify(credentials));
      return true;
    }
    return false;
  }

  onLogout() {
    this.storageService.removeItem(USER);
    this.router.navigate(['/login']);
  }
}
