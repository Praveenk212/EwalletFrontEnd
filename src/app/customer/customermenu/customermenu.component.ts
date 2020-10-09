import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from 'src/app/customer';
import { CustomerserviceService } from 'src/app/customerservice.service';

@Component({
  selector: 'app-customermenu',
  templateUrl: './customermenu.component.html',
  styleUrls: ['./customermenu.component.css']
})
export class CustomermenuComponent implements OnInit {
  customer: customer;

  constructor(private activatedroute:ActivatedRoute,private router:Router,private customerService:CustomerserviceService) { }

  phoneNo:any;

  ngOnInit(): void {

    this.phoneNo=this.activatedroute.snapshot.paramMap.get('phoneNo')
    console.log(this.phoneNo)
    this.customerService.personalDetail(this.phoneNo).subscribe
    (data=>
      {console.log(data);
        this.customer=data;
      },err=>{
        console.log(err.error);
        //this.message=err.error.text;
      
      }); 
  }

  logout()
  {
    this.router.navigate(['']);
    window.alert("Logging Out::::::::::Customer")
  }
 

}
