import { Quote } from '../../data/quote.interface';
import { AlertController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor (
    private navParams: NavParams,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //  Add elvise operator (?) in template to use this approach
  //  Ex: {{ quoteGroup?.category}}
  //  Page template renders before data becomes available so it gives an error
  // }

  onAddToFavourite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('Ok');
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Canceled!');
          }
        }
      ]
    });

    alert.present();
  }
}
