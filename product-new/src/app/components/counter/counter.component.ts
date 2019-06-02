import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count=0;
  address=null;
  branchAddress={city:"bangalore"};
  constructor() { }

  ngOnInit() {
  }

  increment(){
    console.trace("incremennt called");
    this.count++;
  }

  decrement(){
    console.trace("decrement called");
    this.count--;
  }

}
