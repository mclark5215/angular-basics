import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  istechrelated: boolean= false
  title:string="title"
  content:string="content"
  constructor() { }

  ngOnInit(): void {
  }
switchIsTechRelated(){
  this.istechrelated=!this.istechrelated
}

}
