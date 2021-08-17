import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Strange' },
      { id: 12, name: 'Iron Man' },
      { id: 13, name: 'Hulk' },
      { id: 14, name: 'Hawk eye' },
      { id: 15, name: 'Black Widow' },
      { id: 16, name: 'Spider Man' },
      { id: 17, name: 'Captain America' },
      { id: 18, name: 'Ant Man' },
      { id: 19, name: 'Black Panther' },
      { id: 20, name: 'Thor' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
