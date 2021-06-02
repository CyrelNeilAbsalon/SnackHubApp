// import { Injectable } from '@angular/core';
// import { RequestOptions } from '@angular/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';

// @Injectable()
// export class PostProvider {
//     server: string = "http://localhost/ionic/server_api/";
    
//     constructor(public http: HttpClient, public headers: HttpHeaders, public options: RequestOptions) {
//     }
    
//     postData(body, file){
// 		let type = "application/json; charset=UTF-8";
// 		let headers = new Headers({ 'Content-Type': type });
// 		let options = new RequestOptions({ headers: headers });

// 		return this.http.post(this.server + file, JSON.stringify(body), options)
// 		.map(res => res.json());
//     }
// }   