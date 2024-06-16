import { Component, OnInit } from '@angular/core';
import { config } from '../../core/config/config';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Router } from 'express';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  info: any;
  class: string = 'scale-[1.7]';

  faLink = faLink;

  constructor() {}

  ngOnInit(): void {
    this.info = config.info;
  }
}
