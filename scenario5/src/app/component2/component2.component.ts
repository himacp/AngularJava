import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

message1:string;
  
@Output()
  messageChild = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  messageChildHandler(value : string){
    this.message1=value;
    this.messageChild.emit(this.message1)
  }
}
