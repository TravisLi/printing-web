import { Product } from './product';

export class OrderItem{
    
    id:string;
    product:Product;
    quantity:number;
    uploadFile:string;
    remark:string;

}