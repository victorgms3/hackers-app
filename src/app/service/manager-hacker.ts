import { Injectable } from '@angular/core';
import { Hacker } from '../model/Hacker';

@Injectable({
  providedIn: 'root',
})
export class ManagerHacker {
  constructor() { }

  getAllHackers(): Hacker[] {
    return JSON.parse(localStorage.getItem('badGuys') || '[]');
}
}
