import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/model/storeModel';

@Component({
  selector: 'store-header',
  templateUrl: './store-header.component.html',
  styleUrls: ['./store-header.component.scss']
})
export class StoreHeaderComponent implements OnInit {

  @Input() store : Store;
  constructor() { }

  ngOnInit(): void {
  }

}
