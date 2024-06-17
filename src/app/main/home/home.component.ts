import { Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { config } from 'src/app/core/config/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  info: any;
  class = 'scale-[1.7]';

  faLink = faLink;

  ngOnInit(): void {
    this.info = config.info;
  }
}
