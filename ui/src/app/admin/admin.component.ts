import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  numbers = [10,20,30,40,50,60,70,80]
  
  constructor() {
    // this.numbers.length
   }


  ngOnInit(): void {
  }

}
