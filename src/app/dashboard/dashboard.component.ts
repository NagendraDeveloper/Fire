import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../services/emitter.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public _emitter:EmitterService) { }

  ngOnInit() {
    this._emitter.setHeader(true);
  }

}
