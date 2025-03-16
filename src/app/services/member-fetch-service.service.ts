import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberFetchServiceService {

  private API_URL_GetMembershgips = 'http://localhost:5000/api/membresias';
  private API_URL_BUY_MEMBERSHIP = 'http://localhost:5000/api/membresia/comprar';
  private API_URL_GET_TRANSACTIONS = "http://localhost:5000/api/transacciones";

  constructor(private httpClient: HttpClient) { }

  getMembers() {
    return this.httpClient.get(this.API_URL_GetMembershgips);
  }

  buyMembership(data: any) {
    return this.httpClient.post(this.API_URL_BUY_MEMBERSHIP, data);
  }

  getTransactions() {
    return this.httpClient.get(this.API_URL_GET_TRANSACTIONS);
  }
}
