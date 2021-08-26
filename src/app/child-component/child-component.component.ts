import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
})
export class ChildComponentComponent implements OnInit {
  @Input() inputForParent!: string;
  @Output() myOutpuit = new EventEmitter<string>();

  outputString = 'Hey I am you child';
  constructor() {}

  ngOnInit(): void {
    console.log(this.inputForParent);
  }
  sendData() {
    this.myOutpuit.emit(this.outputString);
  }
}
