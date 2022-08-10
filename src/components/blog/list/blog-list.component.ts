import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/model/blogModel';

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  @Input() blogList: Blog[];
  constructor() { }

  ngOnInit(): void {
  }

}
