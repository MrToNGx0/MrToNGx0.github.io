import { Component, OnInit } from '@angular/core';
import { config } from '../../core/config/config';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  info: any;
  class: string = 'scale-[1.7]';

  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor() {}

  ngOnInit(): void {
    this.info = config.info;
  }

  onClickCopy(input: string) {
    navigator.clipboard.writeText(input);
  }
}
