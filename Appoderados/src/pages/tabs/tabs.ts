import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { BancosPage } from '../bancos/bancos';
import { ClientesPage } from '../clientes/clientes';
import { OficinasPage } from '../oficinas/oficinas';
import { ApoderadosPage } from '../apoderados/apoderados';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BancosPage;
  tab2Root = ClientesPage;
  tab3Root = OficinasPage;
  tab4Root = ApoderadosPage;
  color: string = "primary";

  myIndex: number;
  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}

