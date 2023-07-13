import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleHeaderComponent } from '../article-header/article-header.component';
import { ArticleBodyComponent } from '../article-body/article-body.component';
import { Article } from '../interface/article';
import { ArticleDataService } from './article-data.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleHeaderComponent, ArticleBodyComponent, HttpClientModule],
  providers:[ArticleDataService],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  // items: any;

  public articleService = inject(ArticleDataService);

  ngOnInit(): void {
    // this.items = this.articleService.articles;
    // this.articleService.run();
  }
}
