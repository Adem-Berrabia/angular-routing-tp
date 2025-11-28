import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;
  productSlug: string | null = null;
  product: any = null;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.productSlug = params.get('slug');
      this.loadProductData();
    });
  }
  loadProductData() {
    // Simulation de données produit
    this.product = {
      id: this.productId,
      name: this.productSlug?.replace(/-/g, ' ').toUpperCase(),
      price: 299.99,
      description: 'Description détaillée du produit',
      stock: 15,
      category: 'Électronique',
    };
  }
}
