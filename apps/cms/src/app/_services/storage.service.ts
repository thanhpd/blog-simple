import { Injectable } from '@angular/core';
import { Utils } from '../_utils/utils';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public clearLocalStorage(): void {
    localStorage.clear();
  }

  public setItem(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getItem(key: string): any {
    return Utils.jsonTryParse(localStorage.getItem(key));
  }

  public isItemExisting(key: string): boolean {
    return this.getItem(key) != null;
  }

  public getDataObject<T>(key: string, isDateType = false): T {
    let data = this.getItem(key);

    if (data != null) {
      if (isDateType) { data = new Date(data); }
      return <T>data;
    } else {
      return null;
    }
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
