import { Component } from '@angular/core';
import { Hacker } from '../../model/Hacker';
import { ManagerHacker } from '../../service/manager-hacker';

@Component({
  selector: 'app-hacker-list',
  standalone: false,
  templateUrl: './hacker-list.html',
  styleUrl: './hacker-list.css',
})
export class HackerList {
  hackers: Hacker[] = [];

  constructor(private managerHacker: ManagerHacker) {
    this.hackers = this.managerHacker.getAllHackers();
  }
  editHacker(hacker: Hacker) {
    this.managerHacker.editHacker(hacker);
  } 
}
