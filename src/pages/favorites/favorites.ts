import { QuotePage } from '../quote/quote';
import { ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Component } from '@angular/core';

import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor (
    private quotesService: QuotesService,
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
  }

}
