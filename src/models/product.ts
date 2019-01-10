import { ProductCategory } from "./product-category";
import { Material } from "./material";

export class Product{
    id:number;
    productCategroy:ProductCategory;
    material:Material;
    height:number;
    width:number;
    baseQuantity:number;
    name:string;
    unit:string;
    price:number;
}