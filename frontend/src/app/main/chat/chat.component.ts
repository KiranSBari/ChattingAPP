import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment'; 

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }
  chat={
    message:''
  }
 
  ngOnInit(): void {
  }
  url=environment.apiUrl;
  socket = io(this.url);
   
  addListener() {
    if (this.chat.message) {
      this.socket.emit('chat message', this.chat.message);
      this.chat.message = '';
    }
  }
 
}
