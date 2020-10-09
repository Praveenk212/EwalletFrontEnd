import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { throwError } from 'rxjs';
import {retry,catchError} from 'rxjs/operators';
import { customerlogindetail } from './CustomerLogin';
import { customer } from './customer';
import { message } from './message';
import { transaction } from './transaction';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {




  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private httpClient:HttpClient) { }

  accountServiceUrl:String="http://localhost:8089";
  transactionServiceUrl:String="http://localhost:9095";


  validateCustomer(cust:customerlogindetail):Observable<boolean>{
    return this.httpClient.post<boolean>('http://localhost:9097/customer-login',cust,this.options);
  }

  newCustomerAccount(customer:customer):Observable<message>
  {
    return this.httpClient.post<message>(this.accountServiceUrl+'/newcustomer',customer,this.options)
    
  }


  personalDetail(phoneNo:any):Observable<customer>
  {
    return this.httpClient.get<customer>(this.accountServiceUrl+'/getcustomerbymobile/'+phoneNo,this.options);
  }
  updatePersonalDetail(customer:customer):Observable<message>
  {
    return this.httpClient.post<message>(this.accountServiceUrl+'/updatedetail/',customer,this.options)
  }

  transferMoney(senderPhnNUmber:any,receiverPhnNumber:any,amount:any):Observable<message>
  {
    return this.httpClient.get<message>(this.transactionServiceUrl+'/transfer-money/'+senderPhnNUmber+'/'+receiverPhnNumber+'/'
    +amount,this.options)
  }

  viewCustomerBalance(phnNumber:number):Observable<message>
  {
    return this.httpClient.get<message>(this.transactionServiceUrl+'/view-customer-balance/'+phnNumber,this.options);
  }

  viewTransactionDetail(phnNumber:number):Observable<transaction>
  {
    return this.httpClient.get<transaction>(this.transactionServiceUrl+'/view-customer-transaction/'+phnNumber,this.options);
  }

  viewAllTransaction():Observable<transaction>
  {
    return this.httpClient.get<transaction>(this.transactionServiceUrl+'/transaction-list',this.options)
  }



  errorhand(error)
  {
    return throwError(error);
  }
}
