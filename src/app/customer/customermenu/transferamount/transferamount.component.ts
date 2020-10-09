import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerserviceService } from 'src/app/customerservice.service';
import { CustomermenuComponent } from '../customermenu.component';

@Component({
  selector: 'app-transferamount',
  templateUrl: './transferamount.component.html',
  styleUrls: ['./transferamount.component.css']
})
export class TransferamountComponent implements OnInit {

  constructor(public appcomponent:AppComponent,
    private customerService:CustomerserviceService,private customercomponent:CustomermenuComponent) { }


    currentDate:any;
    message: any;
  ngOnInit(): void {
  }
  phnNumber:any;
  senderPhnNumber:any;
  amount:any;
  receiverPhnNumber:any;

  transferMoney() 
	{
    
    this.senderPhnNumber=this.customercomponent.phoneNo;
    this.customerService.transferMoney(this.senderPhnNumber,this.receiverPhnNumber,this.amount).subscribe
    (data=>
      {console.log(data);
        this.message=data.message;
      },err=>{
        console.log(err.error);
        this.message=err.error.message;
      
      });

   
	}

}
