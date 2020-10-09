import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { customerlogindetail } from '../CustomerLogin';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService:CustomerserviceService,private router:Router) { }

  mobileNo:any;
  passWord:any;

  ngOnInit(): void {
  }

  login(event)
  {

    this.customerService.validateCustomer(new customerlogindetail(this.mobileNo,this.passWord)).subscribe(isValid => {
      if(!isValid)
      {
        window.alert("Invalid Login Credentials");
      }
      else{
        this.router.navigate(["customer/customermenu",this.mobileNo]);
      }
    });

  }

  newUser() {
    this.router.navigate(['newcustomeraccount'])
  }
}
