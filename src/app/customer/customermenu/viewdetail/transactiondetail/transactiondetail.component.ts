import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from 'src/app/customerservice.service';
import { CustomermenuComponent } from '../../customermenu.component';
import { transaction } from 'src/app/transaction';

@Component({
  selector: 'app-transactiondetail',
  templateUrl: './transactiondetail.component.html',
  styleUrls: ['./transactiondetail.component.css']
})
export class TransactiondetailComponent implements OnInit {
  message: any;

  constructor(private customerService:CustomerserviceService,public customerMenuComponent:CustomermenuComponent) { }

  transaction:transaction;
  phnNumber:any;


  ngOnInit(): void {
    
    this.phnNumber=this.customerMenuComponent.phoneNo;

    this.customerService.viewTransactionDetail(this.phnNumber).subscribe
    (data=>
      {console.log(data);
        this.transaction=data;
      },err=>{
        console.log(err.error);
        this.message=err.error.message;
      
      });
  }

}
