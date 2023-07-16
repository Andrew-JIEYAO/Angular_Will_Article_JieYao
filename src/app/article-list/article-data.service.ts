import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { Article } from '../interface/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  private apiUrl = 'http://localhost:3000/articles';
  private http: HttpClient = inject(HttpClient);
  public articles = this.onGetArticles();

  public onGetArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  onDelete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  };

  onChangeTitle(changedArticle: any) {
    this.http.put<any>(`http://localhost:4200/api/articles/${changedArticle.id}`, changedArticle).subscribe(result => {
      console.log(result);
    },
    (error) => {
      console.log(error);
    })
  };
}
