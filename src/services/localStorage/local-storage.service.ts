import { Injectable } from '@angular/core';
import { Good } from 'src/model/goodModel';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addGoodToCart(good:Good, count: number):void{

  }
}
