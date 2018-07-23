import { Injectable ,EventEmitter,Output} from '@angular/core';

@Injectable()

export class EmitterService {
  
  @Output() enableheader :EventEmitter<boolean> = new EventEmitter(true);

  constructor() { }
  
  setHeader(value){
    console.log("Setting Header");
    return this.enableheader.emit(value);
  }

  getHeader(){
    console.log("Getting Header");
    return this.enableheader;
  }

}
