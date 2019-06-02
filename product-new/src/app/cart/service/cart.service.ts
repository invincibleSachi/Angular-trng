import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import {Subject, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items: CartItem[] =[];
//$ used to make convention that amount is observable, observable impl from rxjs
//Observable is pub sub model
//Subject next method used to publish ,similar to emit method, even emit method is using next to publish the value

//Whenver amout get changed publish the value
amount=0;
amount$:BehaviorSubject<number>=new BehaviorSubject(this.amount);
totoalItme=0;
totalItem$:BehaviorSubject<number>=new BehaviorSubject(this.totoalItme);

  constructor() {
    console.log('cart service created');
   }

   recalculate(){
     let amount=0;
     let totalItems=0;
     for (const item of this.items){
       amount=amount+item.price*item.qty;
       totalItems=totalItems+item.qty;
     }
     this.amount=amount;
     this.totoalItme=totalItems
     //publish totalitem and amount
     this.amount$.next(this.amount);
     this.totalItem$.next(this.totoalItme);
   }

  addItem(item:CartItem){
    this.items.push(item);
    this.recalculate();
  }
  removeItem(id:number){
    const index=this.items.findIndex(item=>item.id===id);
    if(index>=0){
      this.items.splice(index,1);
    }
    this.recalculate();
  }
  updateItem(id:number,qty:number){
    const item = this.items.find(itemR=> itemR.id===id);
    if(item){
      item.qty=qty;
    }
    this.recalculate();
  }
  empty(){
    this.items.splice(0,this.items.length);
    this.recalculate();
  }
}
