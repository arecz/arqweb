import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {

  myWorks: Array<{}> = [
    {
      name: 'Type IT',
      description: "Strona wykonana przy użyciu SASS'a i jQuery",
      image: '../../assets/img/typeit.png'
    },
    {
      name: 'Paryja',
      description: "Strona stworzona w oparciu o framework Angular 4",
      image: '../../../assets/img/paryja.png'
    },
    {
      name: 'WeatherApp',
      description: "Prosta aplikacja pokazująca pogodę w 3 z 5 wybranych miast, oparta na frameworku Angular 4 i API Yahoo Weather",
      image: '../../../assets/img/weatherapp.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
