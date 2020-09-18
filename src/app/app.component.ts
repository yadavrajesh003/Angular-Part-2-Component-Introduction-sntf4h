import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl:'/app.component.html' //1
 /* template: `
    <div><h1>{{pageTitle}}</h1>
      <div>My First Component</div>
    </div>
    `*/
})
export class AppComponent {
  pageTitle: string = 'Product Management';
}