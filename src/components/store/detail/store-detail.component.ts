import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/model/storeModel';
import { StoreService } from 'src/services/store/store-service.service';

@Component({
	selector: 'store-detail',
	templateUrl: './store-detail.component.html',
	styleUrls: ['./store-detail.component.scss']
})

export class StoreDetailComponent implements OnInit {
	store: Store;
	isLoading:Boolean = false;

	constructor(
		private storeService:StoreService,
		private route: ActivatedRoute,
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
		if(this.route && this.route.parent){
			this.route.params
				.subscribe(params => 
					{
						let storeId: string = params['id']; 
						this.getStore(storeId);
					}
				);
		}
		
	}

}
