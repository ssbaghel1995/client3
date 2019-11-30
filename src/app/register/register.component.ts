import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emp=
  {"No":"",
   "Name":"",
   "Age":""
   };

 constructor(private route: ActivatedRoute,
   private router:Router,
   private service:DataService)
    {

    }


  ngOnInit() {
  }
  Insert()
  {
    console.log(this.emp);
    let observableResult=this.service.Insert(this.emp);
    observableResult.subscribe( (result)=> {
      console.log(result);
      this.router.navigate(['home']);

    } );
  }

}
