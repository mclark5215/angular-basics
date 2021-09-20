import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlescontainerComponent } from './articlescontainer/articlescontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlescontainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
