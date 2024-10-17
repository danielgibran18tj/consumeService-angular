import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../../models/user';
import { UserResponse } from '../../models/userResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<UserResponse>(this.apiUrl)
    .pipe(
      map(response => {
        return response.results.map(result => ({
          nombre: `${result.name.title} ${result.name.first} ${result.name.last}`,
          correo: result.email,
          telefono: result.phone,
          ciudad: result.location.city,
          estado: result.location.state
        }));
      })
    )
  }
}
