import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

 @Input() url = '';
 @Input() title = '';
 @Input() subtitle = '';
 @Input() description = '';
 @Input() number = '_0.jpg'

 n:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickRight() {
    this.n++;
    this.number = `_${this.n}.jpg`
  }

  onClickLeft() {
    if (this.n > 0) {
    this.n--;
    }
    this.number = `_${this.n}.jpg`
  }

}
