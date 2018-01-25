import { Component, OnInit } from '@angular/core';
import { zoomInLongAnimation } from '../../_animations/zoom-in-long.animation';
import { fadeInExtraShortAnimation } from '../../_animations/fade-in-extra-short.animation';
import { fadeInAnimation } from '../../_animations/fade-in.animation';
import { fadeInBricksAnimation } from '../../_animations/fade-in-bricks.animation';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss'],
  animations: [zoomInLongAnimation, fadeInShortAnimation, fadeInAnimation]
})

export class SkillsetComponent implements OnInit {

  showSkills = false;
  animationEnded = false;

  constructor() { }

  ngOnInit() {

  }

  onButtonClick() {
    this.showSkills = true;
  }

}
