import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emps:any;
  
  constructor(private service:DataService,private router:Router) { }

  ngOnInit()
   {
     let observableResult=this.service.Select();
    observableResult.subscribe((result)=>{
      console.log(result);
      this.emps=result;
    
    });
    
    
    


    
      //{"No":1,"Name":"Ritu","Age":24},
      //{"No":2,"Name":"Amruta","Age":24},
      //{"No":3,"Name":"Nita","Age":24},
      //{"No":4,"Name":"Sinu","Age":24}
    //];
  }

  GoToRegister()
  {
    this.router.navigate(['/register']);
  }
  
  ngOnDestroy()
  {
    console.log("Home component destroyed..");
  }

}
