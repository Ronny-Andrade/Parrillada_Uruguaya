import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-atras',
  templateUrl: './header-atras.component.html',
  styleUrls: ['./header-atras.component.scss'],
})
export class HeaderAtrasComponent implements OnInit {

  @Input() titulo:string='';
  constructor() { }

  ngOnInit() {}

}
