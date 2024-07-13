import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Output() rated = new EventEmitter<number>();

  currentRate = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  faStar = faStar;

  constructor(public dialogRef: MatDialogRef<RatingComponent>) {}

  rate(rate: number) {
    this.currentRate = rate;
    this.rated.emit(rate);
    this.closeModal();
  }

  hoverStar(star: number) {
    this.currentRate = star;
  }

  leaveStar() {
    this.currentRate = 0;
  }

  closeModal() {
    this.dialogRef.close();
  }
}
