import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerserviceService } from 'src/app/customerservice.service';
import { CustomermenuComponent } from '../../customermenu.component';
import { customer } from 'src/app/customer';

@Component({
  selector: 'app-personaldetail',
  templateUrl: './personaldetail.component.html',
  styleUrls: ['./personaldetail.component.css']
})
export class PersonaldetailComponent implements OnInit {

  constructor(private customerService:CustomerserviceService,public customerMenuComponent:CustomermenuComponent ) { }

  customer:customer;
  phoneNo:any;  
  ngOnInit()
   {
    this.phoneNo=this.customerMenuComponent.phoneNo;

    this.customerService.personalDetail(this.phoneNo).subscribe
    (data=>
      {console.log(data);
        this.customer=data;
      },err=>{
        console.log(err.error);
        //this.message=err.error.text;
      
      }); 
  }


}
