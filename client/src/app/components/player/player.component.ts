import { Component, OnInit} from '@angular/core';
import { Player } from '../../models/player';
import { PlayerService } from '../../services/player/player.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private playerSvc: PlayerService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.playerSvc.cast.subscribe(player => this.player = player)
  }
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  player: Player;
  
}
