import { Component, OnInit, Injectable } from '@angular/core';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';
import { fadeInAnimation } from '../../_animations/fade-in.animation';
import { zoomInAnimation } from '../../_animations/zoom-in.animation';
import { fadeInLongAnimation } from '../../_animations/fade-in-long.animation';
import { Http } from '@angular/http';


import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInShortAnimation, fadeInAnimation, zoomInAnimation, fadeInLongAnimation]
})

@Injectable()
export class ContactComponent {
  alert = 'Wyślij';
  messageSent = 'pending';
  message = {};

  constructor( private afs: AngularFirestore) {

  }
  sendEmail(f) {
    this.afs.collection('posts').add({'email': f.email, 'content': f.message}).then(
      (response) => this.messageSent = 'sent',
      (error) => this.messageSent = 'error'
    );
  }

  changeText() {
    this.alert = 'Wysyłanie...';
  }

  onMessageClose() {
    this.messageSent = 'pending';
    this.alert = 'Wyślij';
  }

}
