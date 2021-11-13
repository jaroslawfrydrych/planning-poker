import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppInfoDtoInterface } from '@planning-poker/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) {
  }

  public getAppInfo(): Observable<AppInfoDtoInterface> {
    return this.http.get<AppInfoDtoInterface>('api/app-info');
  }
}
