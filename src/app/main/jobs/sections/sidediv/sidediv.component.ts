import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidediv',
  templateUrl: './sidediv.component.html',
  styleUrls: ['./sidediv.component.scss'],
})
export class SidedivComponent implements OnInit {
  @Input() sidedata: any;
  @Output() searchEmit = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  searchFunction(jobid: any): void {
    console.log(jobid);
    this.searchEmit.emit(jobid);
  }
}
