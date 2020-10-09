import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from 'src/app/customerservice.service';

@Component({
  selector: 'app-getalltransaction',
  templateUrl: './getalltransaction.component.html',
  styleUrls: ['./getalltransaction.component.css']
})
export class GetalltransactionComponent implements OnInit {
  constructor(private customerService:CustomerserviceService) { }


  reportList:any;
  ngOnInit(): void {
    
    this.customerService.viewAllTransaction().subscribe
    (data=>
      {
        console.log(data);
       this.reportList=data;
      },err=>{
        console.log(err.error);      
      })

  }

}
