import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero';
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  
    heroes: Hero[];
  
    constructor(private heroService: HeroService , private messageService : MessageService) { }
  
    ngOnInit() {
      this.getHeroes();
    }
  
    getHeroes(): void {
      this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    }
    
  }


