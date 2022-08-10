import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/model/categoryModel';

@Component({
	selector: 'app-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

	@Input() categoryList:Category[];
	
	constructor() { }

	ngOnInit(): void {
	}

}
