import { Component, Input, OnInit } from '@angular/core';
import { Good } from 'src/model/goodModel';

@Component({
  selector: 'good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss']
})
export class GoodListComponent implements OnInit {

  @Input() goodList:Good[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
