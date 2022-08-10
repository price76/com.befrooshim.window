import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/model/blogModel';
import { BlogService } from 'src/services/blog/blog.service';

@Component({
	selector: 'app-blog-home',
	templateUrl: './blog-home.component.html',
	styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

	blogList:Blog[];
	storeId: string;

	constructor(
		private blogService: BlogService,
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
		if(this.route && this.route.parent){
				this.route.parent.params
					.subscribe(params => 
						{
							let storeId: string = params['id']; 
							this.storeId = storeId;
							this.getAllBlog(storeId);
						}
					);
			}
	}

	getAllBlog(storeId: string):void{
		this.blogService.getAll(storeId)
			.subscribe((data:any) => 
				{
					this.blogList = data.blogList;
				}
			)
	}

}
