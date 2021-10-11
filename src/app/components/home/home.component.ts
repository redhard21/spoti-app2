import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newReleases:any;



  constructor(
                private http: HttpClient,
                private spotify: SpotifyService
                
                
                ) 
                
                {this.spotify.getNewRel().subscribe((param:any) => {
                  this.newReleases = param
                })} 

  ngOnInit(): void {
  }

}
