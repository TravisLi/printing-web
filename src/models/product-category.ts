import { Product } from './product'
import { DbObject } from './db-object';

export class ProductCategory extends DbObject{
    
    sorting = ['name'];
   
    name:string;
    image:string;
    
}