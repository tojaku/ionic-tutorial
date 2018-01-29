import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Zadatak } from './zadatak';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SpremisteProvider } from '../../providers/spremiste/spremiste';

@IonicPage()
@Component({
  selector: 'page-zadatci',
  templateUrl: 'zadatci.html',
})
export class ZadatciPage {

  private zadatci: Zadatak[] = [];
  private noviZadatakObrazac: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
    private spremiste: SpremisteProvider) {
      
    // testni podatci
    /*let zadatak1 = new Zadatak();
    zadatak1.naslov = 'Naučiti Ionic';
    zadatak1.opis = 'Poslušati sva predavanja i napraviti testnu aplikaciju'
    zadatak1.izvrsen = false;
    this.zadatci.push(zadatak1);

    let zadatak2 = new Zadatak();
    zadatak2.naslov = 'Otići u dućan';
    zadatak2.opis = 'Kupiti mlijeko, kruh i zobene pahuljice'
    zadatak2.izvrsen = true;
    this.zadatci.push(zadatak2);*/

    this.noviZadatakObrazac = this.formBuilder.group({
      naslov: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])],
      opis: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100)
      ])],
    });
  }

  public idiNaPomoc() {
    this.navCtrl.push('PomocPage');
  }

  public izvrsi(zadatak: Zadatak) {
    zadatak.izvrsen = !zadatak.izvrsen;
  }

  public obrisi(index: number) {
    this.zadatci.splice(index, 1);
  }

  public posaljiNoviZadatakObrazac() {
    let naslov = this.noviZadatakObrazac.value.naslov;
    let opis = this.noviZadatakObrazac.value.opis;

    let noviZadatak = new Zadatak();
    noviZadatak.naslov = naslov;
    noviZadatak.opis = opis;
    noviZadatak.izvrsen = false;

    this.zadatci.push(noviZadatak);

    this.noviZadatakObrazac.reset();
  }

  async ionViewWillEnter() {
    let spremljeniZadatci = await this.spremiste.dohvati();
    if (spremljeniZadatci) {
      this.zadatci = spremljeniZadatci;
    }
  }

  ionViewWillLeave() {
    this.spremiste.spremi(this.zadatci);
  }

}
