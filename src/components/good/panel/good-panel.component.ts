import { Component, Input, OnInit } from '@angular/core';
import { Good } from 'src/model/goodModel';
import { GoodService } from 'src/services/good/good.service';

@Component({
  selector: 'good-panel',
  templateUrl: './good-panel.component.html',
  styleUrls: ['./good-panel.component.scss']
})
export class GoodPanelComponent implements OnInit {

	goodList:Good[];
	isLoading: Boolean = false;

	@Input() storeId:string;

	constructor(
		private goodService:GoodService
	) { }

	getGoodList():void{
		this.isLoading = true;
		this.goodService
			.getAll(this.storeId)
			.subscribe((data:any) => this.onGetGoodListSuccess(data));
	}

	onGetGoodListSuccess(data:any):void{
		this.isLoading = false;
		this.goodList = data.goodList;
	}

	ngOnInit(): void {
		this.getGoodList();
	}

}
