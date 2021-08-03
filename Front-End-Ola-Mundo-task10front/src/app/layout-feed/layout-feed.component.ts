import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-layout-feed',
  templateUrl: './layout-feed.component.html',
  styleUrls: ['./layout-feed.component.css']
})
export class LayoutFeedComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }
  }

}
