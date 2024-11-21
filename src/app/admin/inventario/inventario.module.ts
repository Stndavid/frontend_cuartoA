import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdcutoComponent } from './components/prodcuto/prodcuto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';



@NgModule({
  declarations: [
    ProdcutoComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventarioModule { }
