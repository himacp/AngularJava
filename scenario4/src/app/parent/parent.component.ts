import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

message1:string;
  constructor() { }

  ngOnInit() {
  }
  messageChildHandler(value : string){
    this.message1=value;
  }

}
