import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { contentComponent } from './content/app.contentComponent';
import { RequestComponent } from './request/app.request.component';
import { productComponent } from './product/app.productComponent';
import { myaccountComponent } from './myaccount/app.myaccountComponent';
import { footerComponent } from './footer/app.footerComponent';
import { MailerComponent } from './contact/contacts.component';
import { pageNotFoundComponent } from './404/pageNotFoundComponent';


@NgModule({
  imports: [
              BrowserModule,
              FormsModule,
              HttpModule,
              RouterModule.forRoot
              (
                [
                  {
                        path:'',
                        component: contentComponent
                  },
                  {
                        path:'request',
                        component: RequestComponent
                  },
                  {
                        path:'product',
                        component: productComponent
                  },
                  {
                        path:'myaccount',
                        component: myaccountComponent
                  },
                  {
                        path: 'contact',
                        component:MailerComponent
                  },
                  {
                        path: '**',
                        component:pageNotFoundComponent
                  }
                ]
              )
            ],
  declarations: [
              AppComponent,
              headerComponent,
              contentComponent,
              RequestComponent,
              productComponent,
              myaccountComponent,
              footerComponent,
              MailerComponent,
              pageNotFoundComponent
            ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
