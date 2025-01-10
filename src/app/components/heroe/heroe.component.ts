import { Component } from '@angular/core';
import { HeroeService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-heroe',
    standalone: false,
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    heroe: any;

    constructor(private _heroeService: HeroeService, private activatedRoute: ActivatedRoute){
        this.activatedRoute.params.subscribe(
            params=> {
                console.log(params['id'])
            }
        )
    }

    ngOnInit() {
        this.heroe = this._heroeService.getHeroes();
    }
}