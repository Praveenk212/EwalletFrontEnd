import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerserviceService } from 'src/app/customerservice.service';
import { CustomermenuComponent } from '../../customermenu.component';

@Component({
  selector: 'app-accountdetail',
  templateUrl: './accountdetail.component.html',
  styleUrls: ['./accountdetail.component.css']
})
export class AccountdetailComponent implements OnInit {
  message: any;

  constructor(private customerService:CustomerserviceService,public customerMenuComponent:CustomermenuComponent) { }

  account:any;
  phnNumber:any;

  ngOnInit(): void {
    
    this.phnNumber=this.customerMenuComponent.phoneNo;

    this.customerService.viewCustomerBalance(this.phnNumber).subscribe
    (data=>
      {console.log(data);
        // this.account=data;
        // this.message=this.account;
        this.message=data.message;
      },err=>{
        console.log(err.error);
        this.message=err.error.message;
      
      }); 
  }

}
