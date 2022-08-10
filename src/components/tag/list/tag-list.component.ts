import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/model/tagModel';

@Component({
	selector: 'tag-list',
	templateUrl: './tag-list.component.html',
	styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

	@Input() tagList: Tag[];

	constructor() { }

	ngOnInit(): void {
	}

}
