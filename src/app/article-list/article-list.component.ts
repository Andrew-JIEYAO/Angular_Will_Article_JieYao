import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ArticleHeaderComponent } from '../article-header/article-header.component';
import { ArticleBodyComponent } from '../article-body/article-body.component';
import { Article } from '../interface/article';
import { ArticleDataService } from './article-data.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleHeaderComponent, ArticleBodyComponent, HttpClientModule, AsyncPipe],
  providers:[ArticleDataService],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  public articleService = inject(ArticleDataService);
  public items$: Observable<Article[]> = [] as unknown as Observable<Article[]>;

  ngOnInit(): void {
    this.onGetItems();
  }

  public onDelete(article: Article): void {
    this.articleService.onDelete(article.id).subscribe(() => this.onGetItems());
  }

  public onChangeTitle(article: Article): void {
    this.articleService.onChangeTitle(article)
  }

  private onGetItems() {
    this.items$ = this.articleService.onGetArticles();
  }
}
