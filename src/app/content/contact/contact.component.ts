import { Component, OnInit } from '@angular/core';
import { IMessage, AppService } from '../../app.service';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';
import { fadeInAnimation } from '../../_animations/fade-in.animation';
import { zoomInAnimation } from '../../_animations/zoom-in.animation';
import { zoomInLongAnimation } from '../../_animations/zoom-in-long.animation';
import { fadeInLongAnimation } from '../../_animations/fade-in-long.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInShortAnimation, fadeInAnimation, zoomInAnimation, zoomInLongAnimation, fadeInLongAnimation]
})
export class ContactComponent {
  alert = 'Wyślij';
  title = 'Angular PHP Email Example!';
  message: IMessage = {};
  messageSent = false;

  constructor(private appService: AppService) {

  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    });
  }

  onMessageSend() {
    this.messageSent = !this.messageSent;
  }

}
