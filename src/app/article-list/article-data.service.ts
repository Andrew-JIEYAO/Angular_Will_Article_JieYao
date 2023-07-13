import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  articles: any;

  constructor(private http: HttpClient) {
    http.get("http://localhost:4200/api/articles.json").subscribe(result => {
      this.articles = result;
    })
  }

  run() {
    console.log('hello');
  };

  onDelete(item: any) {
    //回傳與父物件類別相等的內容
    this.articles = this.articles.filter((v: any) => {
      return v.id !== item.id; //要讓Angular刷新
      // return v !== item;
    });
  };

  onChangeTitle(changedArticle: any) {
    this.articles = this.articles.map((v: any) => {
      if (v.id == changedArticle.id) {
        return Object.assign({}, v, changedArticle);
      };
      return v;
    });
  };
}
