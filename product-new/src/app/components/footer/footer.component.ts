import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  year

  @Output()
  footerEvent: EventEmitter<string> =new EventEmitter();
  constructor() { }
  today=new Date();
  discount=100/3.0
  
  ngOnInit() {
  }

  sayHello(){
    //this.footerEvent.emit('Hello from footer');
    console.log("hello")
  }

}
