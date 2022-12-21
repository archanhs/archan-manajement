import { Component, OnInit } from '@angular/core';
import { IProduct, IProductWrapper } from 'src/app/interfaces/i-product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Array<IProduct> = [];
  showMore: boolean = false;
  product: IProduct = {} as IProduct;
  // product!: IProduct;

  ngOnInit(): void {
    this.onAll();
  }

  constructor(private productService: ProductService) {}

  showToggle() {
    this.showMore = !this.showMore;
  }
  onAll(): void {
    this.productService.all().subscribe((response: IProductWrapper) => {
      this.products = response.products;
    });
  }

  showDetail(p: IProduct) {
    this.product = p;
  }
  cancel() {
    this.product = {} as IProduct;
  }
}
