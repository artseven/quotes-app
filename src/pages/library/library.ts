import { Quote } from '../../data/quote.interface';

import { Component, OnInit } from '@angular/core';
import quotes from '../../data/quotes';
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})

export class LibraryPage implements OnInit {
  //defining type
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  
  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
