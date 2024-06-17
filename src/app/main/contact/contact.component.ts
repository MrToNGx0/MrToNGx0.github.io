import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { config } from 'src/app/core/config/config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  info: any;
  class = 'scale-[1.7]';

  faEnvelope = faEnvelope;
  faPhone = faPhone;

  ngOnInit(): void {
    this.info = config.info;
  }

  onClickCopy(input: string) {
    navigator.clipboard.writeText(input);
  }
}
