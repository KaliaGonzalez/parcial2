import { Component, OnInit } from '@angular/core';
import { Anime } from '../Anime'; 
import { AnimesService } from '../animes.service'; 
import { AnimesDetailComponent } from '../animes-detail/animes-detail.component';
@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {
  animes: Array<Anime> =[]; 
  selectedAnime!: Anime; 
  selected= false;
  constructor(private animesService:AnimesService) { }
  getAnimes():void{ 
    this.animesService.getAnimes().subscribe((animes)=>{this.animes=animes;});
  } 
  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedAnime = anime;
  } 

  ngOnInit() { 
    this.getAnimes;
  }

}
