import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

/**
 * Enrollee Service
 */
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  /**
   * Header info for http related communications
   */
  private header() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  
  public getUser(id: number): Observable<User> {
    let url: string = `${environment.server}/${id}`;
    console.log(url);
    return this.http.get<User>(
      url, this.header()
    );
  }

  public getUsers(): Observable<User[]> {
    let url: string = `${environment.server}`;
    console.log(url);
    return this.http.get<User[]>(
      url, this.header()
    );
  }
  
}
