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
        this.service.getPaisesHispanos().subscribe(data => {
            console.log(data[0].name.official); 
            this.paises = data;
        });
    
}