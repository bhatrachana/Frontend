import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../Product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {
  id: number;
  product: product;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductServiceService) { }

  ngOnInit(){
    //this.product = new product();

    this.id = this.route.snapshot.params['id'];
    
    this.productService.getproduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  updateproduct() {
    this.productService.updateproduct(this.id, this.product)
      .subscribe(data => {
        console.log(data);
        this.product = new product();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this.updateproduct();    
  }

  gotoList() {
    this.router.navigate(['/product']);
  }
}  


