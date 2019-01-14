import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';
  testService : TestService;
 
  //argument to the constructor indicates a 
  // dependency-injection hint within angular
  // this works with @Injectable
  constructor(_TestService : TestService, private httpClient : HttpClient) {
    this.testService = _TestService;
    this.testService.printToConsole("app.component got the service " + this.testService);
   
  }

 ngOnInit()
 {
   let resultReady = this.httpClient.get('https://api.github.com/users/twinbee', {observe: 'response'} );
   //resultReady.subscribe(response => this.testService.printToConsole( response.body ) ); //FIXME  MB 2019.01.13
   resultReady.subscribe(response => console.log( response.body ) );
 }

}
