import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroes.service';

@Component({
    selector: 'app-about',
    standalone: false,
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit{
    
    socios: any[] = [];
    paises: any[] = [];
    
    constructor(private service: HeroeService) {}
    
    ngOnInit(): void {
        this.paises = this.service.getPaisesHispanos();
    }
}