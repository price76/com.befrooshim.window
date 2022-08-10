import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/model/imageModel';

@Component({
  selector: 'image-panel',
  templateUrl: './image-panel.component.html',
  styleUrls: ['./image-panel.component.scss']
})
export class ImagePanelComponent implements OnInit {

  @Input() imageList:Image[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
