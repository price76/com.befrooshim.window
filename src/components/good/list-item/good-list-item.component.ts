import { Component, Input, OnInit } from '@angular/core';
import { Good } from 'src/model/goodModel';

@Component({
  selector: 'good-list-item',
  templateUrl: './good-list-item.component.html',
  styleUrls: ['./good-list-item.component.scss']
})
export class GoodListItemComponent implements OnInit {

  @Input() good:Good;

  constructor() { }

  ngOnInit(): void {
  }

}
