import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Zadatak } from '../../pages/zadatci/zadatak';

@Injectable()
export class SpremisteProvider {

  constructor(private storage: Storage) {

  }

  public spremi(zadatci: Array<Zadatak>) {
    this.storage.set('zadatci', zadatci);
  }

  public async dohvati(): Promise<Array<Zadatak>> {
    let result = await this.storage.get('zadatci');
    return result;
  }

}
