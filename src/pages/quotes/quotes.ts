import { Quote } from '../../data/quote.interface';
import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor (private navParams: NavParams) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //  Add elvise operator (?) in template to use this approach
  //  Ex: {{ quoteGroup?.category}}
  //  Page template renders before data becomes available so it gives an error
  // }
}
