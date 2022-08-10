import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/model/imageModel';

@Component({
  selector: 'image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.scss']
})
export class ImageListItemComponent implements OnInit {

  @Input() image:Image;
  constructor() { }

  ngOnInit(): void {
  }

}
