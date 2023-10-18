import { Injectable, signal } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AccountModalComponent } from '../components/account-modal/account-modal.component';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  loginLoading = signal(false)
  signupLoading = signal(false)
  promptLoading = signal(false)
  testsLoading = signal(false)

  constructor(private modalCtrl: ModalController) { }

  async openModal() {

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }
  }

  async showAccountModal() {
    const modal = await this.modalCtrl.create({
      component: AccountModalComponent,
      cssClass: 'my-modal-class'
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

  }
}
