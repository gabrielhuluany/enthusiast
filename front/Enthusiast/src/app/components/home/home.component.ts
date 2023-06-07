import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    ngOnInit() {
        let element:HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
        element.click();
    }
}
