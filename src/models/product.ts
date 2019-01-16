import { ProductCategory } from "./product-category";
import { Material } from "./material";

export class Product{
    id:number;
    name:string;
    material:Material;
    height:number;
    width:number;
    baseQuantity:number;
    unit:string;
    price:number;
    productCategroy:ProductCategory;
}