import { Injectable, Output } from '@angular/core';
import { Hacker } from '../model/Hacker';
import { IHacker } from '../model/IHacker';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManagerHacker {
  constructor() { }
  @Output() editHackerEvent = new EventEmitter<IHacker>() 
  editHacker(hacker: IHacker) {
    
  this.editHackerEvent.emit(hacker) 
  }

  getAllHackers(): Hacker[] {
    return JSON.parse(localStorage.getItem('badGuys') || '[]');
  }


}
