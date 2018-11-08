import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { IAppConfig } from '../_models';

@Injectable()
export class AppConfigService {
  private appConfig: IAppConfig;
  private http: HttpClient;
  constructor(
    private handler: HttpBackend,
  ) {
    this.http = new HttpClient(handler);
  }

  loadAppConfig() {
    return this.http.get('/appConfig.json')
      .toPromise()
      .then((data: IAppConfig) => {
        this.appConfig = data;
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
