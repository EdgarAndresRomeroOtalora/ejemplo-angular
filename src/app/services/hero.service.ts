import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import {HEROES} from "../interfaces/mock-heroes";

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroesUrl: string = 'http://localhost:5000/api/heroes';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Heroes obtenidos');
    //return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: Se obtuvo el héroe hero  id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}


