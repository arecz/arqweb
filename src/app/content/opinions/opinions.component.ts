import { Component, OnInit } from '@angular/core';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';
import { fadeInAnimation } from '../../_animations/fade-in.animation';
import { fadeInLongAnimation } from '../../_animations/fade-in-long.animation';
import { zoomInLongAnimation } from '../../_animations/zoom-in-long.animation';


@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.scss'],
  animations: [fadeInShortAnimation, fadeInAnimation, fadeInLongAnimation, zoomInLongAnimation]
})
export class OpinionsComponent implements OnInit {

  currentId = 0;

  opinions: Array<{name: string, quote: string, image: string, id: number}> = [
    {
      name: 'Paweł Łukasiak - TypeIT',
      quote: 'Sprawnie i czytelnie. Poza założeniami do strony dodał pare smaczków od siebie, co bardzo ją poprawiło. Oby tak dalej!',
      image: '../../../assets/img/pl.jpg',
      id: 1
    },
    {
      name: 'Karolina Olbryś - Paryja',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum nisi et cursus consequat. Sed nec tempor libero. Phasellus molestie elementum urna.',
      image: '../../../assets/img/pink.png',
      id: 2
    }
  ];

  constructor() { }

  onArrowClick() {
    if (this.currentId === this.opinions.length - 1) {
      this.currentId = 0;
    } else {
      this.currentId++;
    }
  }

  ngOnInit() {
  }

}
