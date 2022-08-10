import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/model/blogModel';

@Component({
  selector: 'blog-list-item',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.scss']
})
export class BlogListItemComponent implements OnInit {

  @Input() blog: Blog;

  constructor() { }

  ngOnInit(): void {
  }

}
