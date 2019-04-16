import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit, OnDestroy {

  constructor(private el: ElementRef) { }

  readonly panelId = Math.round(Math.random() * 10000);

  get dimensions(): string {
    return `${this.el.nativeElement.offsetWidth} x ${this.el.nativeElement.offsetHeight}`;
  }
  ngOnInit() {
    console.log(`Initializing Panel ${this.panelId}`);
  }

  ngOnDestroy() {
    console.log(`Destroying Panel ${this.panelId}`);
  }

}
