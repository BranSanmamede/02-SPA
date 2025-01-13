import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-heroes',
    standalone: false,
    templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit{
    
    heroes: Heroe[] = [];
    
    constructor(private heroesService: HeroeService, private router: Router) {}
    
    ngOnInit() {
        this.heroes = this.heroesService.getHeroes();
    }
    
    verHeroe(id:number) {
        this.router.navigate(['/heroe', id])
    }
}