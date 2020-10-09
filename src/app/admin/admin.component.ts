import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
import { customerlogindetail } from '../CustomerLogin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminserviceService,private router:Router) { }

  phoneNo:any;
  passWord:any;

  ngOnInit(): void {
  }

  login(event)
  {

    this.adminService.validateAdmin(new customerlogindetail(this.phoneNo,this.passWord)).subscribe(isValid => {
      if(!isValid)
      {
        window.alert("Invalid Login Credentials");
      }
      else{
        this.router.navigate(["admin/adminmenu"]);
      }
    });

  }

}
