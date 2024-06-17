import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/core/config/config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  info: any;

  ngOnInit(): void {
    this.info = config.info;
  }
}
