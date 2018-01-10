import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appStarted = false;

  constructor (private router: Router) {}

  ngOnInit() {
    this.router.navigate(['../']);
  }

  onLoadingClick() {
    this.appStarted = true;
  }
}
