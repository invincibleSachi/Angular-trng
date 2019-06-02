import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //Angular create instance for cart service
  //if instance already present inject the same into cart
  //inject the instance into cart component
  items:CartItem[]=[]
  constructor(private cartService: CartService) { 
    console.log('Cart component created')
    this.items=this.cartService.items;
  }

  ngOnInit() {
  }

  addItem(){
    const id=Math.floor(Math.random()*1000000);
    const item=new CartItem(id,Math.floor(Math.random()*100),`Product ${id}`,1)
    this.cartService.addItem(item);

  }

  empty(){
    this.cartService.empty();
  }

  incr(item:CartItem){
    this.cartService.updateItem(item.id,item.qty+1)
  }
  decr(item:CartItem){
    if(item.qty<=0){
      return;
    }
    this.cartService.updateItem(item.id,item.qty-1)
  }
  deleteItem(id:number){
    this.cartService.removeItem(id);
  }
}
