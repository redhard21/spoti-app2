import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artist:any [] = [];

  constructor(private spotify:SpotifyService) { }

  ngOnInit(): void {
  }

  search(term:any){this.spotify.getArtist(term).subscribe((param:any) => this.artist = param)};

}
