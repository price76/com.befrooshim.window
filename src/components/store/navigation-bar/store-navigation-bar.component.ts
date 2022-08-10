import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'store-navigation-bar',
  templateUrl: './store-navigation-bar.component.html',
  styleUrls: ['./store-navigation-bar.component.scss']
})
export class StoreNavigationBarComponent implements OnInit {

  @Input() storeId: string;
  constructor() { }

  ngOnInit(): void {
  }

  navigateToContact(){
    window.location.hash = '';
      window.location.hash = 'contact';
  }

}
