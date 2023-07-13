import { Component, importProvidersFrom, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListComponent } from './article-list/article-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule,HeaderComponent,FooterComponent,ArticleListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  wordCount = 0;
  keyWord = '';

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }
  //normal
  CountKeyWord(event: Event) {
    const e = event.target as HTMLInputElement;
    this.wordCount = e.value.length;
    this.keyWord = e.value;
  }
  ResetKeyWord(event: Event) {
    const e = event.target as HTMLInputElement;
    e.value = '';
    this.wordCount = 0;
    this.keyWord = '';
  }

  //signal
  SignalKeyWord = signal('');
  SignalResetKeyWord() {
    this.SignalKeyWord.set('123');
    console.log(123);
  }
}
