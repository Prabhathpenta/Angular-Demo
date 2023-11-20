import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product:any;
  id:number=0;
  
  constructor(private route : ActivatedRoute, private ps : ProductService) {}
    ngOnInit() {
      this.route.params.subscribe(
        (data)=>{
        this.id=data['id'];
        console.log(this.id) 
        this.ps.getProductsById(this.id).subscribe(
          (data:any)=>{
            this.product=data;
        console.log(this.product);
          })
        }
      )}
}