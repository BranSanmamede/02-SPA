import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: false,
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {

    constructor(private router: Router){}  

    buscarHeroe(texto: string) {
        this.router.navigate(['/search', texto]);
    }
}