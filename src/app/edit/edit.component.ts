import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit
 {
     emp={ "No": "", "Name": "", "Age": "" };

  constructor(private route: ActivatedRoute, //for mapping
               private router: Router, //to navigate
               private service: DataService) 
  { 

  }

  ngOnInit()
   {
     //fetch data from database for selection of specific record
     this.route.paramMap.subscribe((result)=>
     {
     let No =  result.get("No");
       let observableresult=this.service.SelectByNo(No);
       observableresult.subscribe((data)=>
       {
         console.log(data);
         this.emp=data[0];
       });
     });
  }

  Update()
  {
    console.log(this.emp);
   let observableresult= this.service.Update(this.emp);
   observableresult.subscribe((result)=>{
     console.log(result);
     this.router.navigate(['/home']);
   });
  }
}
