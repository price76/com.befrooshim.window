import { Component, OnInit } from '@angular/core';
import { Store } from 'src/model/storeModel';
import { StoreService } from 'src/services/store/store-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	store: Store;
	isLoading:Boolean = false;

	constructor(
		private storeService:StoreService
	) { }

	getStore(storeId:string){
		this.isLoading = true;
		this.storeService.getStore(storeId)
			.subscribe((data: any) => this.onGetStoreSuccess(data))
	}

	onGetStoreSuccess(data:any){
		this.isLoading = false;
		if(data.store){
			this.store = data.store;
		}
	}

	ngOnInit(): void {
		this.getStore('5d33094bbc80bc2f6a69a931');
	}

}
