import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  templateUrl:'request.html',
  styleUrls: ['app.requestStyle.css']
})
export class RequestComponent {
  people: Object[];

  constructor(private http:Http){
    this.http.get('app/request/data.json').subscribe(res => {
        this.people = res.json();
        if(this.people && this.people.length>0)
            this.setThis(this.people[0]);
    });
  }
  public currentStatus;
  public setThis = (people) => this.currentStatus = people;
}