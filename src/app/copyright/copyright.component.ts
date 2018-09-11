import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  copyright: string = 'Todos los derechos reservados, DP mobel S.A de S.V';
  hoy: any = Date();

  constructor() { }

  ngOnInit() {
  }

}
