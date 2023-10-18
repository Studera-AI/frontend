import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  styleUrls: ['./account-modal.component.scss'],
})
export class AccountModalComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, private authSrv: AuthService) { }

  ngOnInit() {}
  name = localStorage.getItem("name")

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }

  signOut() {
    this.authSrv.logout()
  }

}
