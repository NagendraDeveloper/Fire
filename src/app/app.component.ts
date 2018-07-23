import { Component} from '@angular/core';
import {Router} from '@angular/router';
import {EmitterService} from '../app/services/emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public  enableheader :boolean;
public  enablefooter :boolean;

  constructor(public _router:Router,public _emitter:EmitterService){}

  ngOnInit(){
    // this._router.navigate(['dashboard']);
    this._emitter.getHeader().subscribe(value => {
      this.enableheader = value;
      this.enablefooter = value;
  });
  }
}
