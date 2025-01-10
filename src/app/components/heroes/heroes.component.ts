import { Component } from '@angular/core';
import { HeroeService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-heroes',
    standalone: false,
    templateUrl: './heroes.component.html'
})
export class HeroesComponent {

    heroes: Heroe[] = [];

    constructor(private _heroesService: HeroeService, private router: Router) {}

    ngOnInit() {
        this.heroes = this._heroesService.getHeroes();
    }

    verHeroe(id:number) {
        this.router.navigate(['/heroe', id])
    }
}