import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './component/like/like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipe/power.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [
    AddressComponent, 
    LikeComponent, 
    HighlightDirective, 
    PowerPipe, 
    FilterPipe, 
    SortPipe
  ],
  imports: [
    CommonModule
  ],
  exports :[
    AddressComponent, 
    LikeComponent, 
    HighlightDirective, 
    PowerPipe, 
    FilterPipe, 
    SortPipe
  ]
})
export class SharedModule { }
