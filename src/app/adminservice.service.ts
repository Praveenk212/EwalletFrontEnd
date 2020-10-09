import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { customerlogindetail } from './CustomerLogin';
import { customer } from './customer';
import { message } from './message';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private httpClient:HttpClient) { }


  accountServiceUrl:String="http://localhost:8089";
  transactionServiceUrl:String="http://localhost:9095";

  validateAdmin(admin:customerlogindetail):Observable<boolean>{
    return this.httpClient.post<boolean>('http://localhost:9097/admin-login',admin, this.options);
  };

  
  viewCustomerList():Observable<customer>
  {
    return this.httpClient.get<customer>(this.accountServiceUrl+'/getallcustomer',this.options);
  }

  viewPendingCustomerList():Observable<customer>
  {
    return this.httpClient.get<customer>(this.accountServiceUrl+'/getaccounttoapprove',this.options)
  }

  AcceptOrReject(phoneNo:any):Observable<message>
  {
    return this.httpClient.get<message>(this.accountServiceUrl+'/approveaccount/'+phoneNo,this.options)
    //  .pipe(catchError(this.errorhand));
    
  }
  errorhand(error)
  {
    return throwError(error);
  }

}
