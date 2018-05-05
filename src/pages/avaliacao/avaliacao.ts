import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SlidesProvider} from "../../providers/slides/slides";


/**
 * Generated class for the AvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
})
export class AvaliacaoPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public slide: SlidesProvider) {
  }

  slides = [
    {
      title: "Imagem 1",
      description: "",
      image: "assets/imgs/Adult_Mulher1.png",
    },
    {
      title: "Imagem 2",
      description: "",
      image: "assets/imgs/Adult_Mulher2.png",
    },
    {
      title: "Imagem 3",
      description: "",
      image: "assets/imgs/Adult_Mulher3.png",
    },
    {
      title: "Imagem 4",
      description: "",
      image: "assets/imgs/Adult_Mulher4.png",
    },
    {
      title: "Imagem 5",
      description: "",
      image: "assets/imgs/Adult_Mulher5.png",
    },
    {
      title: "Imagem 6",
      description: "",
      image: "assets/imgs/Adult_Mulher6.png",
    },
    {
      title: "Imagem 7",
      description: "",
      image: "assets/imgs/Adult_Mulher7.png",
    }, {
      title: "Imagem 8",
      description: "",
      image: "assets/imgs/Adult_Mulher8.png",
    },
    {
      title: "Imagem 9",
      description: "",
      image: "assets/imgs/Adult_Mulher9.png",
    },
    {
      title: "Imagem 10",
      description: "",
      image: "assets/imgs/Adult_Mulher10.png",
    },
    {
      title: "Imagem 11",
      description: "",
      image: "assets/imgs/Adult_Mulher11.png",
    },
    {
      title: "Imagem 12",
      description: "",
      image: "assets/imgs/Adult_Mulher12.png",
    },
    {
      title: "Imagem 13",
      description: "",
      image: "assets/imgs/Adult_Mulher13.png",
    },
    {
      title: "Imagem 14",
      description: "",
      image: "assets/imgs/Adult_Mulher14.png",
    },
    {
      title: "Imagem 15",
      description: "",
      image: "assets/imgs/Adult_Mulher15.png",
    },

  ]

 addSlide(){
    this.slide.addSlides(this.slides);
 }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacaoPage');
  }

}
