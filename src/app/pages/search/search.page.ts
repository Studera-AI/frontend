import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  theme = 'light';
  searchTerm = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  onSearchChange(e: any) {}

  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }

  onClick() {}

  searchCustomTitle() {
    if (this.searchTerm.length < 1) {
      return;
    }

    this.navigateToPrompt(this.searchTerm)
  }

  navigateToPrompt(title: string) {
    this.router.navigate(
      ['/timeframe'],
      {queryParams: {title}, replaceUrl: false}
    )
  }
}
