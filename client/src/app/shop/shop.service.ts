import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brands';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';

// *** Services are used for connecting the HTTP calls with the component. ***
// *** Services will be availble at all time of the app from start to end. ***
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {

  }

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId !== 0)
      params = params.append('brandId', shopParams.brandId.toString());
    if (shopParams.typeId !== 0)
      params = params.append('typeId', shopParams.typeId.toString());
    if(shopParams.search)
      params=params.append('search', shopParams.search);

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());
    // return this.http.get<IPagination>(this.baseUrl + 'products?pageSize=50');
    return this.http.get<IPagination>(this.baseUrl + 'products', { observe: 'response', params })
      .pipe(    // *** Pipe method is used to map the observable response body to the response var. ***
        map(response => {
          return response.body;
        })
      )
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
