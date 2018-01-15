import { Component, OnInit } from '@angular/core';
import { fadeInExtraShortAnimation } from '../../_animations/fade-in-extra-short.animation';
import { fadeInAnimation } from '../../_animations/fade-in.animation';
import { zoomInAnimation } from '../../_animations/zoom-in.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInExtraShortAnimation, fadeInAnimation, zoomInAnimation]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
