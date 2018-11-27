import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modal-app';
  showModal = false;

  toggleModal = () => {
    this.showModal = !this.showModal;
  }
}
