import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Good } from 'src/model/goodModel';
import { GoodService } from 'src/services/good/good.service';

@Component({
  selector: 'good-home',
  templateUrl: './good-home.component.html',
  styleUrls: ['./good-home.component.scss']
})
export class GoodHomeComponent implements OnInit {

	goodList: Good[];
	storeId: string;

	constructor(
		private goodService: GoodService,
		private route: ActivatedRoute,
	) { }

	getAllGood(storeId: string):void{
		this.goodService.getAll(storeId)
			.subscribe((data:any) =>
			{
				this.goodList = data.goodList;
			}
			)
	}

	ngOnInit(): void {
		if(this.route && this.route.parent){
				this.route.parent.params
					.subscribe(params => 
						{
							let storeId: string = params['id']; 
							this.storeId = storeId;
				this.getAllGood(storeId);
						}
					);
			}
	}

}
