import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartService } from '../../../cart/service/cart.service';
import { CartItem } from '../../../cart/models/cart-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product$:Observable<Product[]>;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.product$=this.productService.getProducts();
  }

  deleteProduct(productid:number){
    this.productService.deleteProduct(productid)
    .subscribe(result=>{
      this.product$=this.productService.getProducts();
    })
  }
  addToCart(product:Product){
    const cartItem=new CartItem(product.id,product.price,product.name,1);
    this.cartService.addItem(cartItem);
  }
}
