import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

message:string;
  
@Output()
  messageChild = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    this.messageChild.emit(this.message);
  }

}
