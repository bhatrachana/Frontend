import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../Product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product :product=new product();
  submitted=false;

  constructor( private productService:  ProductServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  newproduct():void{
    this.submitted=false;
    this.product=new product();
  }
  save(){
    this.productService
    .createproduct(this.product).subscribe(data=>{
      console.log(data)
      this.product=new product();
      this.gotoList();
    },
    error =>console.log(error));
  }
  OnSubmit(){
    this.submitted=true;
    this.save();
  }
 gotoList()
    {
      this.router.navigate(['/product']);
    }
  }