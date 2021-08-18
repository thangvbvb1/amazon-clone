import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDto } from '../model/ProductDto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: ProductDto;

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  pushFileToStorage(files: File[]): Observable<HttpEvent<{}>> {
    // const data: FormData = new FormData();
    //
    // files.forEach(f => {
    //   data.append('file', f);
    // });
    // const newRequest = new HttpRequest('POST', 'http://localhost:3000/api/products/savefile', data, {
    //   reportProgress: true,
    //   responseType: 'text'
    // });
    // return this.https.request(newRequest);
    return null;
  }

  createAProduct(data: FormData): Observable<any>{
    const newRequest = new HttpRequest('POST', `${environment.productAPI}/new`, data, {
        reportProgress: true,
        responseType: 'text'
      });
      return this.http.request(newRequest);
  }

}