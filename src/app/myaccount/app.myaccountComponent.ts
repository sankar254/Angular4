import { Component } from '@angular/core';
import { Validform }    from './valid-form';

@Component({
  // selector: '',
  templateUrl: 'myaccount.html',
})

export class myaccountComponent  {
  powers = ['', 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Validform(18,'', this.powers[0], '');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newHero() {
    this.model = new Validform(42, '', '','');
  }

}
