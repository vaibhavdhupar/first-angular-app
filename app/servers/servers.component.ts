import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'Server not yet created!!!';
  serverName = 'Enter Server Name...';
  serverCreated = false;
  servers = ['Smugglr 1', 'Smugglr 2']
  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
      
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreate(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server created successfully!!!. Server name is: ' + this.serverName;
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
