import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomerserviceService } from 'src/app/customerservice.service';
import { customer } from 'src/app/customer';

@Component({
  selector: 'app-newcustomeraccount',
  templateUrl: './newcustomeraccount.component.html',
  styleUrls: ['./newcustomeraccount.component.css']
})
export class NewcustomeraccountComponent implements OnInit {

  constructor(private customerservice:CustomerserviceService) { }

  ngOnInit(): void {
   
  }

  userName:any;
	passWord:any;
	custName:any;
	age:any;
	gender:any;
	emailId:any;
  address:any;
	aadharNo:any;
  phoneNo:any;
  message:any; 
  errormessage:any; 

  cust:customer;

 
  submit()
  {
    this.cust=new customer(this.phoneNo,this.passWord,this.custName,this.age,
      this.gender,this.emailId,"pending")

      this.customerservice.newCustomerAccount(this.cust).subscribe
      (data=>
        {console.log(data);
          this.message=data.message;
        },err=>{
          console.log(err.error);
          // this.message=err.error;
          this.message=err.error.message;
        });

  }




}
