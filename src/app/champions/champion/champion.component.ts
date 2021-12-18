import { Component, OnInit } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Champion } from 'src/app/models/championsmodelapi';

import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})
export class ChampionComponent implements OnInit {

  // champions$: Observable<{ [key: string]: Champion[]; }>;
  championsList$:Observable<Champion[]>;
  names:string[] =[];

  constructor(private championService:ChampionService) {
  //  this.champions$ = this.championService.list()
  //  this.champions$.forEach(a =>console.log(a))
    this.championsList$ = this.championService.listChampion().pipe(tap(console.log));

   }

  ngOnInit(): void {

    // this.championService.get().pipe(
    //   map(resp => {
    //     resp.data;
    //     for(let name in resp.data){
    //       this.names.push(name);
    //       // console.log(resp.data[name]);
    //     }

    //   })).subscribe();
  }

}
