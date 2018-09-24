import { Component, OnInit } from '@angular/core';
import { Cast } from '../cast';
import { CASTS } from '../casts';


@Component({
  selector: 'app-gotcast',
  templateUrl: './gotcast.component.html',
  styleUrls: ['./gotcast.component.css']
})
export class GOTcastComponent implements OnInit {
casts = CASTS;

selectedCast: Cast;

  constructor() { }

  ngOnInit() {
  }
 onSelect(cast: Cast): void {
    this.selectedCast = cast;
  }
}
