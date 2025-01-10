import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-search',
    standalone: false,
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{

    heroes: Heroe[] = [];
    texto: string = '';

    constructor(private heroeService: HeroeService, private router: Router, private activatedRoute: ActivatedRoute){
        console.log("Hoal");
    }  
    
    ngOnInit() { 
        this.activatedRoute.params.subscribe(params => {
            this.texto = params['texto'];  
            console.log(this.texto);
            this.heroes = this.heroeService.findHeroes(this.texto);
        });
    }

    verHeroe(id:number) {
        this.router.navigate(['/heroe', id]);
    }
}