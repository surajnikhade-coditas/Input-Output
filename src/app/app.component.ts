import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'input-output-directive';
  inputvariable = 'Hey I Am your parent';

  getData(value: any) {
    console.log(value);
  }
}
