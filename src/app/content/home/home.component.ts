import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { fadeInExtraShortAnimation } from '../../_animations/fade-in-extra-short.animation';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';
import { fadeInAnimation } from '../../_animations/fade-in.animation';
import { zoomInAnimation } from '../../_animations/zoom-in.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInExtraShortAnimation, fadeInShortAnimation, fadeInAnimation, zoomInAnimation]
})


export class HomeComponent {

  constructor() { }




}
