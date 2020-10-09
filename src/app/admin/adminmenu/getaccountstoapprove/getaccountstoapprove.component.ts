import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';
import { customer } from 'src/app/customer';

@Component({
  selector: 'app-getaccountstoapprove',
  templateUrl: './getaccountstoapprove.component.html',
  styleUrls: ['./getaccountstoapprove.component.css']
})
export class GetaccountstoapproveComponent implements OnInit {
  message: any;
  errormessage: any;

  constructor(private adminService:AdminserviceService) { }
  pendingCustomerList:any;

  ngOnInit(): void {
    this.adminService.viewPendingCustomerList().subscribe(data=>
      {
        console.log(data);
       this.pendingCustomerList=data;
      },err=>{
        this.message=""
        this.errormessage=err.error.message;     
      })
    }

    AcceptOrReject(tempaccount: customer, event) {
      this.adminService.AcceptOrReject(tempaccount.phoneNo).subscribe(data => {
       this.message=data.message;
       this.ngOnInit();
       event.target.disabled=true;
      },err=>{
        console.log(err.error);
        this.errormessage=err.error.message;
        this.ngOnInit();
        event.target.disabled=true;
      })
    }

}
