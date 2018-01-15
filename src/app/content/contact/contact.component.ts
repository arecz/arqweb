import { Component, OnInit, Injectable } from '@angular/core';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';
import { fadeInAnimation } from '../../_animations/fade-in.animation';
import { zoomInAnimation } from '../../_animations/zoom-in.animation';
import { zoomInLongAnimation } from '../../_animations/zoom-in-long.animation';
import { fadeInLongAnimation } from '../../_animations/fade-in-long.animation';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInShortAnimation, fadeInAnimation, zoomInAnimation, zoomInLongAnimation, fadeInLongAnimation]
})

@Injectable()
export class ContactComponent {
  message = {};
  alert = 'Wyślij';
  messageSent = 'pending';

  constructor(private http: Http) {

  }

  sendEmail(f) {
    this.http.post('https://ewebarq.firebaseio.com/data.json', f).subscribe(
      (response) => this.messageSent = 'sent',
      (error) => this.messageSent = 'error'
    );
  }

  changeText() {
    this.alert = 'Wysyłanie...';
  }

  onMessageClose() {
    this.messageSent = 'pending';
  }

}
