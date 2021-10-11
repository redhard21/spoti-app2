import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  newReleases:any[] = [];

  constructor(private spotify:SpotifyService) 
  
    {this.spotify.getNewRel().subscribe((param:any) => {
    this.newReleases = param})} 



    
  ngOnInit(): void {
  }

}
