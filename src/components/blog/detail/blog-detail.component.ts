import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/model/blogModel';
import { BlogService } from 'src/services/blog/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

	storeId: string;
  	blog: Blog;
	isLoading:Boolean = false;

	constructor(
		private blogService:BlogService,
		private route: ActivatedRoute,
	) { }

	getBlog(blogId:string){
		this.isLoading = true;
		this.blogService.get(blogId)
			.subscribe((data: any) => this.onGetBlogSuccess(data))
	}

	onGetBlogSuccess(data:any){
		this.isLoading = false;
		
		if(data.blog){
			this.blog = data.blog;
		}
	}

	ngOnInit(): void {
		if(this.route && this.route.parent){
			this.route.params
				.subscribe(params => 
					{
						console.log('asdfa');
						
						let blogId: string = params['id']; 
						this.getBlog(blogId);
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
