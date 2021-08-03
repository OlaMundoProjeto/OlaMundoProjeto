import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  entrar (usuarioLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>("https://olamundoprojeto.herokuapp.com/usuarios/logar" , usuarioLogin)
  }

  cadastrar (usuario: User): Observable<User> {
    return this.http.post<User>("https://olamundoprojeto.herokuapp.com/usuarios/cadsatrar", usuario)

  }

}
