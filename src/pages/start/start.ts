import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  private pinObrazac: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController) {

    this.pinObrazac = this.formBuilder.group({
      pin: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ])]
    });

  }

  public posaljiPinObrazac() {
    let pin = this.pinObrazac.value.pin;

    if (pin == '1234') {
      this.navCtrl.setRoot('ZadatciPage');
    } else {
      let toast = this.toastCtrl.create({
        position: 'top',
        duration: 3000
      });

      toast.setMessage('Unijeli ste pogrešan PIN! Pokušajte ponovno...');
      toast.present();
    }
  }

}
