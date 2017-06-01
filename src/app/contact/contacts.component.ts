import {Component, OnInit} from '@angular/core';
import {HttpModule }    from '@angular/http';
import {ContactService}    from './contact.service';
import {Email}             from './interfaces/Email';

@Component({
    selector: 'contact',
    templateUrl: 'contacts.component.html',
    styleUrls:['contacts.component.css'],
    providers: [HttpModule , ContactService]
})

export class MailerComponent implements OnInit {
    constructor(private _contactService : ContactService) { }
    ngOnInit() { }

    public message: Email = {name: '', email: '', message: ''};

    handleResponse(response){
      console.log(`msg is: {response.status}`);

      if(response.status =='success'){
        this.message = {name: '', email: '', message: ''};
        alert('message send');
      }

      if(response.status =='error'){
        alert('There was a problem submitting your form');
      }
    }

    onSubmit() {
      this._contactService.postEmail(this.message).subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
    }
}
