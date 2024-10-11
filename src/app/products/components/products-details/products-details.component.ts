import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'] // Ensure this path is correct
})
export class ProductsDetailsComponent implements OnInit {
  product: any; // The product details will be stored here
  productId: number | null = null; // Store product ID from the route

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params['id']; // Get product ID from route

    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe(
        (data) => {
          this.product = data; // Store product data
        },
        (error) => {
          console.error('Error fetching product details:', error);
        }
      );
    }
  }
}

