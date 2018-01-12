import { Component, OnInit } from '@angular/core';
import { fadeInShortAnimation } from '../../_animations/fade-in-short.animation';
import { fadeInAnimation } from '../../_animations/fade-in.animation';
import { fadeInLongAnimation } from '../../_animations/fade-in-long.animation';
import { zoomInAnimation } from '../../_animations/zoom-in.animation';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss'],
  animations: [fadeInShortAnimation, fadeInAnimation, fadeInLongAnimation, zoomInAnimation]
})
export class MyworkComponent implements OnInit {

  myWorks: Array<{}> = [
    {
      name: 'Type IT',
      description: "Strona wykonana przy użyciu m.in SASS'a i JS/jQuery",
      image: '../../assets/img/typeit.png',
      link: 'http://type-it.pl/'
    },
    {
      name: 'Paryja',
      description: "Strona stworzona w oparciu o framework Angular 4",
      image: '../../../assets/img/paryja.png',
      link: 'http://paryja.com.pl/'
    },
    {
      name: 'WeatherApp',
      description: "Prosta aplikacja pokazująca pogodę w losowych 3 z 5 wybranych miast, odświeżająca się co 10 sekund, oparta na frameworku Angular 4 i API Yahoo Weather",
      image: '../../../assets/img/weatherapp.png',
      link: 'https://weatherapp-f6df0.firebaseapp.com/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
