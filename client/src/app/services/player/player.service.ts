import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Player } from '../../models/player';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  private player: any = new BehaviorSubject<string>(null);
  cast  = this.player.asObservable();
  viewPLayer(player){
    this.player.next(player);
  }
  arena(){
    return this.http.post<any>('/arena', {} ,httpOptions);
  }

}
