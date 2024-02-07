import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-project';
  fname:string='';
  lname:string='';

  users:{
    fname:string,
    lname:string,
    id:number,
  }[]=[{
    fname:'Rahul',
    lname:'Pandey',
    id:1
  },{
    fname:'Rahul',
    lname:'Pandey',
    id:2
  },{
    fname:'Rahul',
    lname:'Pandey',
    id:3
  },{
    fname:'Rahul',
    lname:'Pandey',
    id:4
  },{
    fname:'Rahul',
    lname:'Pandey',
    id:5
  },{
    fname:'Rahul',
    lname:'Pandey',
    id:6
  }]

  addNewUser(){
    this.users.push(
      {
        fname:this.fname,
        lname:this.lname,
        id:this.users.length+1
      }
    );
  }

  trackByFn(index: number, user:{
    fname:string,
    lname:string,
    id:number,
  }): number {
    return user.id;
  }

}
