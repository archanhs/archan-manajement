import { Component, Input, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { IProduct } from 'src/app/interfaces/i-product';
import { ProductService } from 'src/app/services/product.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  // @Input() product!: IProduct;
  @Input() product: IProduct = {} as IProduct;
  showMore: boolean = false;
  showToast: boolean = false;
  isConfirmDelete: boolean = false;
  constructor(
    private productService: ProductService,
    private toastService: ToasterService
  ) {}
  ngOnInit(): void {}

  showToggle() {
    this.showMore = !this.showMore;
  }
  cancel() {
    this.product = {} as IProduct;
    this.showMore = false;
  }
  save() {
    this.productService.post(this.product).subscribe((response: IProduct) => {
      this.showMore = false;
      this.product = {} as IProduct;
      this.toastService.showToast = true;
      this.toastService.message = `Berhasil menyimpan data ${response.title}`;
    });
    console.log(this.product);
  }
  setProduct(product: IProduct) {
    this.product = JSON.parse(JSON.stringify(product));
  }

  update() {
    this.productService.update(this.product).subscribe((response: IProduct) => {
      this.showMore = false;
      this.product = {} as IProduct;
      this.toastService.showToast = true;
      this.toastService.message = `Berhasil mengupdate data ${response.title}`;
    });
  }
  delete() {
    this.productService
      .delete(this.product.id)
      .subscribe((response: IProduct) => {
        this.showMore = false;
        this.product = {} as IProduct;
        this.toastService.showToast = true;
        this.toastService.message = `Berhasil menghapus data ${response.title}`;
        this.isConfirmDelete = false;
      });
  }
}
