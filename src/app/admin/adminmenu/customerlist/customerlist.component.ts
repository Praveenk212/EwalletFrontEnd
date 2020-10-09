import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(private adminService:AdminserviceService) { }
  customerList:any;

  ngOnInit(): void {
    this.adminService.viewCustomerList().subscribe(data=>
      {
        console.log(data);
       this.customerList=data;
      },err=>{
        console.log(err.error);      
      })


  }

}
