import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from './../shared/data.service';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})

  @Injectable()
export class Component1Component implements OnInit  {

  message:String;
  constructor(private dataService : DataService) {
        // this.Message = this.dataService.getValue();    
   }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

  onSubmit(value){
   this.dataService.changeMessage(value);
   
  }

}
