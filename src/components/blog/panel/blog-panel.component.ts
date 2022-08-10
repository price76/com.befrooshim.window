import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/model/blogModel';
import { BlogService } from 'src/services/blog/blog.service';

@Component({
	selector: 'blog-panel',
	templateUrl: './blog-panel.component.html',
	styleUrls: ['./blog-panel.component.scss']
})

export class BlogPanelComponent implements OnInit {

	blogList:Blog[];
	isLoading: Boolean = false;

	@Input() storeId:string;

	constructor(
		private blogService:BlogService
	) { }

	getBlogList(storeId:string):void{
		this.isLoading = true;
		this.blogService
			.getAll(this.storeId)
			.subscribe((data:any) => this.onGetBlogListSuccess(data));
	}

	onGetBlogListSuccess(data:any):void{
		this.isLoading = false;
		console.log(data);
		
		this.blogList = data.blogList;
	}

	ngOnInit(): void {
		this.getBlogList(this.storeId);
	}

}
