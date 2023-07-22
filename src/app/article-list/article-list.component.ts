import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleHeaderComponent } from '../article-header/article-header.component';
import { ArticleBodyComponent } from '../article-body/article-body.component';
import { Article } from '../interface/article';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleHeaderComponent, ArticleBodyComponent, HttpClientModule],
  providers: [ArticleService],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})

export class ArticleListComponent implements OnInit {
  public articleService: ArticleService = inject(ArticleService);
  public articles: WritableSignal<Article[]> = signal([]);

  async ngOnInit() {
    this.articles.set(await this.articleService.getArticles());
  }

  async onRemoveArticle(article: Article) {
    try {
      await this.articleService.removeArticle(article);
      this.articles.mutate(i => {
        i.splice(i.findIndex(i => i.id === article.id), 1);
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  async onModifyTitle(article: Article) {
    try {
      await this.articleService.modifyArticle(article);
      this.articles.mutate(i => {
        i[i.findIndex(i => i.id === article.id)].title = article.title;
      });
    }
    catch(error) {
      console.log(error);
    }
  }
}
