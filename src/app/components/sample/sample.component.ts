import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor(private el: ElementRef) { }

  get dimensions(): string {
    return `${this.el.nativeElement.offsetWidth} x ${this.el.nativeElement.offsetHeight}`;
  }
  ngOnInit() {
  }

}
