import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css'],
})
export class ArticleBodyComponent implements OnInit, OnChanges {
  @Input() article: any;

  constructor() {
    // console.log('ArticleBodyComponent: constructor');
  };

  ngOnInit(): void {
    // console.log('ArticleBodyComponent: ngOnInit');
  };

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ArticleBodyComponent: ngOnChanges');
  }
}
