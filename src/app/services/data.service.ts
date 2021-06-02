import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseURL: string = "http://localhost/ionic/server_api/";

  constructor(private _http: HttpClient) {
    console.log('Data Service is Working');
  }
  
  _httpGetRequest(endpoint: string): any {
    return this._http.get(this.baseURL+endpoint);
  }
  
  _httpPostRequest(endpoint: string, data: any): any {
    return this._http.post(this.baseURL+endpoint, JSON.stringify(data));
  }
  
}
