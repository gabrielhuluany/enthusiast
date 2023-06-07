import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
    ngOnInit() {
        let element:HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
        element.click();
    }
}
