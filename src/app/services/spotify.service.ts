import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(  private http:HttpClient,) 
              { console.log("Spotify Service Listo")}

  
  getQuery(query:string){
    const url:string = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({ 'Authorization': 'Bearer BQB2MRY_HXA-kXP7T4ut1tR-bKdvny1xHJMccjGqZ8TCYv2pP0L338M9gOc8QKvERpnl5Ql8eyMhueAtY7Y'});

    return this.http.get(url, {headers})
  }

  
   getNewRel(){ return this.getQuery('browse/new-releases')
                .pipe(map((data:any) => {return data.albums.items;}))}




  getArtist(term:string){
    return this.getQuery(`search?q=${term}&type=artist`)
                .pipe(map((data:any) => { return data.artists.items}))


    
  }
    
    
  
}
