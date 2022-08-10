import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/model/categoryModel';

@Component({
	selector: 'category-list-item',
	templateUrl: './category-list-item.component.html',
	styleUrls: ['./category-list-item.component.scss']
})
export class CategoryListItemComponent implements OnInit {

	@Input() category: Category;
	constructor() { }

	ngOnInit(): void {
	}

}
