import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable()
export class HeroeService {
  private heroesUrl = 'assets/heroes.json'; 
  public heroes:Heroe[] = [];
  
  constructor(private dataService: DataService) { }
  
  getHeroes(): Observable<Heroe[]>  {
    return this.dataService.getJSONData(this.heroesUrl);
  }
  
  findHeroes(texto: string): Heroe[] {
    return this.heroes.filter(heroe => heroe.nombre.toLowerCase().includes(texto.toLowerCase()));
  }
}

export interface Heroe {
  id: number,
  nombre: string, 
  bio: string,
  img: string,
  aparicion: string,
  casa: string
}