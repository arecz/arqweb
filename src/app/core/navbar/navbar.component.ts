import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  triggerAnimation() {
    this.appService.animationState.next('active');
    this.router.navigate(['']);
  }

  

  ngOnInit() {
  }

}
