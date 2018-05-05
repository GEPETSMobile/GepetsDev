//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';

/*
  Generated class for the SlidesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SlidesProvider {

  constructor(private vibration: Vibration) {

  }
  selecionarSlide = [];

  addSlides(slide) { //Método para adiconar o slide a lista de selecionado

    if (this.selecionarSlide.indexOf(slide) === -1) {
      this.selecionarSlide.push(slide);
     // this.vibration.vibrate(500);
      console.log("selecionado");
      console.log(this.selecionarSlide);
      console.log(this.selecionarSlide.length)

    }
  }



}
