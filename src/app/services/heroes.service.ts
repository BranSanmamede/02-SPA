import { Injectable } from '@angular/core';

@Injectable()
export class HeroeService {
  public heroes:Heroe[] = [];
  
  constructor(private http: HttpClient) { }
  
  async loadHeroes(): Promise<void> {
    const data = await this.http.get<Heroe[]>('assets/heroes.json').toPromise();
    this.heroes = data;  
  }
  
  getHeroes(): Heroe[] {
    this.loadHeroes();
    return this.heroes;
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