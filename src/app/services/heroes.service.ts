import { Injectable } from '@angular/core';
import heroes from '../../assets/json/heroes.json';
import paisesHispanos from '../../assets/json/paises-hispanos.json';

@Injectable()
export class HeroeService {

  public heroes:Heroe[] = heroes;
  
  getPaisesHispanos() {
    return paisesHispanos;
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