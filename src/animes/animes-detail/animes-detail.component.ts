import { Component, OnInit,Input } from '@angular/core';
import { Anime } from '../Anime';
import { AnimesService } from '../animes.service';
@Component({
  selector: 'app-animes-detail',
  templateUrl: './animes-detail.component.html',
  styleUrls: ['./animes-detail.component.css']
})
export class AnimesDetailComponent implements OnInit {
  @Input() animeDetail!:Anime;
  constructor(private animeService: AnimesService) { }

  ngOnInit() {
  }

}
