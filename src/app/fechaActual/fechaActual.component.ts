import { Component } from '@angular/core';

@Component ({
  selector: 'app-fechaActual',
  templateUrl: './fechaActual.component.html',
  styleUrls: ['./fechaActual.component.css']
})

export class FechaActualComponent {
  hoy = new Date();
}
