import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerserviceService } from 'src/app/customerservice.service';
import { CustomermenuComponent } from '../customermenu.component';
import { customer } from 'src/app/customer';

@Component({
  selector: 'app-updatedetail',
  templateUrl: './updatedetail.component.html',
  styleUrls: ['./updatedetail.component.css']
})
export class UpdatedetailComponent implements OnInit {

  isShow = false;

  constructor(private customerService: CustomerserviceService, public customerMenuComponent: CustomermenuComponent) { }

  customer: customer;
  phoneNo: any;
  message: any;
  notAvailable:any;
  ngOnInit() {
    this.phoneNo = this.customerMenuComponent.phoneNo;

    this.customerService.personalDetail(this.phoneNo).subscribe
      (data => {
        console.log(data);
        if(data.accountStatus=="rejected" ||data.accountStatus=="pending")
        {
          this.message="Your account maybe rejected or in pending state Please Check personal Detail";
          this.notAvailable=true;
        }
        else
        {
          this.notAvailable=false;
          this.customer = data;
        }
        
      }, err => {
        console.log(err.error);
        //this.message=err.error.text;

      });
  }

  detailSubmitted = false;
  paswordSubmitted = false;

  custName: any;
  age: any;
  gender: any;
  emailId: any;


  formupdate(customer) {

    this.custName = customer.custName;
    this.age = customer.age;
    this.gender = customer.gender;
    this.emailId = customer.emailId;

    var x = document.getElementById("hide");
    if (x.style.display = "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }

  }

  updateDetail() {
  
    this.customerService.updatePersonalDetail(new customer(
      this.customer.phoneNo, this.customer.passWord, this.custName, this.age, this.gender, this.emailId, this.customer.accountStatus
    )).subscribe
      (data => {
        console.log(data);
        this.message = data.message;
      }, err => {
        console.log(err.error);
        this.message = err.error.text;

      });
    this.detailSubmitted = true;
    window.alert("Updated");
    this.ngOnInit()

  }



}
