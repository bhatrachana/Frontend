import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  
  
  getproduct(id: number): Observable<any> {
    return this.http.get(environment.baseUrl+'getproducts/' + id);
  }

  createproduct(product: Object): Observable<Object>{
    return this.http.post(environment.baseUrl + 'addproduct',product);
  }
  updateproduct(id: number, value: any): Observable<Object> {
    return this.http.put(environment.baseUrl, value);
  }

  deleteproduct(id: number): Observable<any> {
    return this.http.delete(environment.baseUrl, { responseType: 'text' });
  }

  getproductList(): Observable<any> {
    return this.http.get(environment.baseUrl);
  }
}
