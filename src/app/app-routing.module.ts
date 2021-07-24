import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'',redirectTo:'add',pathMatch:'full'},
  {path:'product',component:ProductlistComponent},
  {path:'add',component:CreateProductComponent},
  {path:'update/:id',component:UpdateproductComponent},
  {path:'details/:id',component:ProductdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
