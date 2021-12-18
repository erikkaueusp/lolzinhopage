import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { Champion, ChampionsModelAPI } from './../models/championsmodelapi';


@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  private readonly API = 'http://ddragon.leagueoflegends.com/cdn/11.24.1/data/pt_BR/champion.json'

  constructor(private http: HttpClient) { }


  get () {
    return this.http.get<ChampionsModelAPI>(this.API)
  }

 listChampion () {
   let champsList: Champion[] = [];
   return this.http.get<ChampionsModelAPI>(this.API).pipe(
     pluck('data'),
     map(champs =>  {
       for (let i in champs) {
         if(i ==='Fiddlesticks'){
           // O S que retorna da api é minusculo e dai ele não acha a url.
          champs[i].id = 'FiddleSticks';
         }
         champsList.push(champs[i]);
       }
       return champsList;
     })
   )
 }



}

