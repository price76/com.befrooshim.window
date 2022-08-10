import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/model/categoryModel';

@Component({
	selector: 'category-label',
	templateUrl: './category-label.component.html',
	styleUrls: ['./category-label.component.scss']
})
export class CategoryLabelComponent implements OnInit {

	@Input() category: Category;
	
	constructor() { }

	ngOnInit(): void {
	}

}
