import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Article } from './interface/article';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  private url = 'http://localhost:3000/articles';
  private http: HttpClient = inject(HttpClient);

  async getArticles() {
    const result$ = this.http.get<Article[]>(this.url);
    return await lastValueFrom(result$);
  }

  async removeArticle(article: Article) {
    const result$ = this.http.delete<Article>(`${this.url}/${article.id}`);
    return await lastValueFrom(result$);
  }

  async modifyArticle(article: Article) {
    const result$ = this.http.patch<Article>(`${this.url}/${article.id}`, article);
    return await lastValueFrom(result$);
  }
}
