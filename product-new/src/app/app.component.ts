import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  year="2018"
  title = 'product-new';
  companyName="SAP"
  constructor() {
    
  }
  ngOnInit(){
    
  }
  handleHello(msg:String){
    alert(msg);
  }
}
