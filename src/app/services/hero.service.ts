import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';


import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroesUrl : string = 'http://localhost:5000/heroes';  // URL to web api
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Heroes obtenidos');
    //return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: string): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero, return of(HEROES.find(hero => hero.id === id));
    this.messageService.add(`HeroService: se obtuvo el heroe id=${id}`);
    return this.http.get<Hero>(this.heroesUrl+'/'+id);
  }

  updateHero(hero: Hero): Observable<Hero>{
    this.messageService.add(`HeroService: Se se edito heroe con id=${hero.id}`);
    return this.http.put<Hero>(this.heroesUrl+'/'+hero.id, hero);
  }

  addHero(hero: Hero): Observable<Hero>{
    this.messageService.add(`HeroService: Se  creará el héroe con`);
    return this.http.post<Hero>(this.heroesUrl, hero);
  }
}


