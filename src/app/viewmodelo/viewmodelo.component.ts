import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/Usuario.model';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {

  usuario1 = new Usuario (1, "Carlos", 'Mendoza', 'Queretaro');

  constructor() { }

  ngOnInit() {
  }

}
