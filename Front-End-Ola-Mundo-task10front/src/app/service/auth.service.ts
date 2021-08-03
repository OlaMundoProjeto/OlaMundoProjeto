import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  entrar (usuarioLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>("https://olamundoprojeto.herokuapp.com/usuarios/logar" , usuarioLogin)
  }

  cadastrar (usuario: User): Observable<User> {
    return this.http.post<User>("https://olamundoprojeto.herokuapp.com/usuarios/cadastrar", usuario)

  }

  logado(){
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }
      return ok

    }
  }
    // criando variavel OK determinando que é booleana e falsa.
    // retornando ok = retornando falso. significa que o método está retornando um boolean.
    // começa com o OK falso e caso seja diferente de vazio = verdadeiro.


