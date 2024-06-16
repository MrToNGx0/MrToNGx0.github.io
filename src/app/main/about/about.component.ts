import { Component, OnInit } from '@angular/core';
import { config } from '../../core/config/config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  info: any;

  constructor() {}

  ngOnInit(): void {
    this.info = config.info;
  }
}
