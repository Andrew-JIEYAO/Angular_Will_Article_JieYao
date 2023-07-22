import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Article } from '../interface/article';

@Component({
  selector: 'app-article-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css'],
})

export class ArticleHeaderComponent implements OnChanges {
  @Input() article!: Article;
  @Output() removeArticle = new EventEmitter<any>();
  @Output() modifyTitle = new EventEmitter<any>();

  public originalArticle!: Article;
  public isEdit = false;

  ngOnChanges(changes: any): void {
    if (changes.article) {
      this.originalArticle = changes.article.currentValue;
      this.article = Object.assign({}, changes.article.currentValue);
    }
  };

  doRemoveArticle() {
    this.removeArticle.emit(this.article);
  }

  doModifyTitle() {
    const newArticle: Article = {
      id: this.article.id,
      title: this.article.title,
    }
    this.modifyTitle.emit(newArticle);
    this.isEdit = false;
  };

  doCancelModifyTitle() {
    this.article.title = this.originalArticle.title;
    this.isEdit = false;
  };
}
