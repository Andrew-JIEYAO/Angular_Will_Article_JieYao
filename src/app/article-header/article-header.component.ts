import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css'],
})
export class ArticleHeaderComponent implements OnInit, OnChanges {
  @Input() item: any;
  @Output() delete = new EventEmitter<any>();
  @Output() changeTitle = new EventEmitter<any>();

  originalItem: any;
  isEdit = false;
  newTitle = '';

  ngOnInit(): void {}

  deleteArticle() {
    this.delete.emit(this.item);
  }
  doChangeTitle() {
    this.changeTitle.emit(this.item);
  };

  doCancel() {
    this.item = Object.assign({}, this.originalItem);
    this.isEdit = false;
  };

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['item']) {
      this.originalItem = changes['item'].currentValue;
      this.item = Object.assign({}, changes['item'].currentValue);
    }
  };
}
