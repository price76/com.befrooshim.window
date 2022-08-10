import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Good } from 'src/model/goodModel';
import { GoodService } from 'src/services/good/good.service';

@Component({
  selector: 'app-good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.scss']
})
export class GoodDetailComponent implements OnInit {

	storeId: string;
  	good: Good;
	isLoading:Boolean = false;

	constructor(
		private goodService:GoodService,
		private route: ActivatedRoute,
	) { }

	getGood(goodId:string){
		this.isLoading = true;
		this.goodService.get(goodId)
			.subscribe((data: any) => this.onGetGoodSuccess(data))
	}

	onGetGoodSuccess(data:any){
		this.isLoading = false;
		console.log(data);
		
		if(data.good){
			this.good = data.good;
		}
	}

	ngOnInit(): void {
		if(this.route && this.route.parent){
			this.route.params
				.subscribe(params => 
					{
						console.log('asdfa');
						
						let goodId: string = params['id']; 
						this.getGood(goodId);
					}
				);
			this.route.parent.params
				.subscribe(params => 
					{
						let storeId: string = params['id']; 
						this.storeId = storeId;
					}
				);
		}
	}

}
