import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/model/imageModel';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  @Input() imageList:Image[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
