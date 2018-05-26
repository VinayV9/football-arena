import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../services/player/player.service'
import { Router } from '@angular/router';
import { DomSanitizer , SafeUrl} from '@angular/platform-browser';
import {Player} from '../../models/player';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  constructor(private playerSvc: PlayerService,
     private router: Router,
     private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.playerSvc.arena().subscribe(
      res => { this.players = res;},
      err =>{ this.router.navigate(['/']); }
    );
  }
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  players : Player[] =[];

  displayPlayer(player: Player){
   this.playerSvc.viewPLayer(player);
   this.router.navigate(['player']);
  }
  
}
