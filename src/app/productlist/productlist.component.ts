import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { product } from '../Product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
 product: Observable<product[]>;
  constructor(private productService: ProductServiceService,
    private router: Router)  { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.product = this.productService.getproductList();
  }

  deleteproduct(id: number) {
    this.productService.deleteproduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  productDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateProduct(id: number){
    this.router.navigate(['update', id]);
  }

}
