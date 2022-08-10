import { Image } from "./imageModel";
import { Tag } from "./tagModel";

export interface Good{
    _id:string,
    title:string,
    description: string,
    price:number,
    imageList: Image[],
    createDate:Date,
    Code: number,
    store: string,
    tagList: Tag[],
}