import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/i-user';
import { ToasterService } from 'src/app/services/toaster.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  @Input() user: IUser = {} as IUser;
  showMore: boolean = false;
  showToast: boolean = false;
  isConfirmDelete: boolean = false;
  constructor(
    private userService: UserService,
    private toastService: ToasterService
  ) {}

  showToggle() {
    this.showMore = !this.showMore;
  }
  cancel() {
    this.user = {} as IUser;
    this.showMore = false;
  }
  save() {
    this.userService.post(this.user).subscribe((response: IUser) => {
      this.showMore = false;
      this.user = {} as IUser;
      this.toastService.showToast = true;
      this.toastService.message = `Berhasil menyimpan data ${response.firstName}`;
    });
  }
  setProduct(user: IUser) {
    this.user = JSON.parse(JSON.stringify(user));
  }

  update() {
    this.userService.update(this.user).subscribe((response: IUser) => {
      this.showMore = false;
      this.user = {} as IUser;
      this.toastService.showToast = true;
      this.toastService.message = `Berhasil mengupdate data ${response.firstName}`;
    });
  }
  delete() {
    this.userService.delete(this.user.id).subscribe((response: IUser) => {
      this.showMore = false;
      this.user = {} as IUser;
      this.toastService.showToast = true;
      this.toastService.message = `Berhasil menghapus data ${response.firstName}`;
      this.isConfirmDelete = false;
    });
  }
  setUser(user: IUser) {
    this.user = JSON.parse(JSON.stringify(user));
  }
}
