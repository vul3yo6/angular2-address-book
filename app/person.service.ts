import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from './person';

//import { HEROES } from './mock-heroes';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HeroService {

    private heroesUrl = 'http://localhost:64093/api/People';  // URL to web api
    constructor(private http: Http) { }

    private HEROES: Person[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

  getHeroes(): Promise<Person[]> {
    /*return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);*/
       return Promise.resolve(this.HEROES);
  }

  /*getHeroes2(): Observable<Person[]> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }*/

  /*getHeroes() {
      return this.HEROES;
  }*/

  /*getHero(id: number) {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }*/

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
