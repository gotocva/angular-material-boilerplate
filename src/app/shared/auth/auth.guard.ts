import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { LocalStorageService } from "../local-storage.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    
   private LOGIN_URL: string = '/auth/login';

  /**
   * @constructor
   * @param {Router} router router object
   */
  constructor(private router: Router,@Inject(DOCUMENT) private document: any,private LocalStorage:LocalStorageService) { }

  private gotoLogin(url?: string) {
    setTimeout(() => {
      if (/^https?:\/\//g.test(url!)) {
        this.document.location.href = url as string;
      } else {
        this.router.navigateByUrl(url);
      }
    });
  }

  private process(): boolean {
    if (this.LocalStorage.getItem('auth') != false) {
        return true;
    } else {
        this.gotoLogin(this.LOGIN_URL);
    }    
  }

  canActivate() : boolean{
    return this.process();
  }

  canActivateChild(): boolean {
    return this.process();
  }
}