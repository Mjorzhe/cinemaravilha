import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  filmes = ['Titanic', 'Avatar', 'Jaws - Um Tubarãozinho do Barulho'];
  imagens = ['https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg', 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b0/Avatar-Teaser-Poster.jpg/250px-Avatar-Teaser-Poster.jpg', 'https://i0.wp.com/pipocamoderna.com.br/wp-content/uploads/2017/09/jaws-poster.jpg'];
  isNovo = [1, 0, 0];
  
  constructor() { }

  ngOnInit() {
  }

}
