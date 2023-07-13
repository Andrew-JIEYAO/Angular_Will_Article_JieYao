import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  private http: HttpClient = inject(HttpClient);
  private getArticles = this.http.get<any>("http://localhost:4200/api/articles.json");
  public articles = toSignal<any>(this.getArticles);


  onDelete(item: any) {
    this.http.delete<any>(`http://localhost:4200/api/articles/${item.id}`).subscribe(result => {
      console.log(result);
    },
    (error) => {
      console.log(error);
    })
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
