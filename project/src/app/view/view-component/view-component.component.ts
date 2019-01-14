import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  testSvc : TestService;
  
  userName : String;
  response : any;


  search() {
   let resultReady = this.httpClient.get('https://api.github.com/users/' + this.userName );
   
   resultReady.subscribe(responseBack =>  this.response = responseBack);

   //console.log( this.response);
   
  }

  constructor(svc : TestService, private httpClient : HttpClient) { 
    this.testSvc = svc;
    svc.printToConsole("View component constructor");
  }

  ngOnInit() {
    this.testSvc.printToConsole("View component ngOnInit");
  }

}
