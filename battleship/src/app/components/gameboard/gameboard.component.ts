import {Component,  OnInit} from '@angular/core';
import { GameBlock } from '../models/gameblock.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {


  gameBlocks: GameBlock[] = [];

  constructor() {}

  ngOnInit() {
    this.createGameBoard();
  }

  public getNumberOfGameBlocks() {
    return this.gameBlocks.length;
  }

  private createGameBoard() {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        this.gameBlocks.push(this.createGameBlock(x, y));
      }
    }
  }

  private createGameBlock(x: number, y: number) {

      return new GameBlock(x, y, true);
    }
  //}
  drop(event: CdkDragDrop<any>) {
    if (event.container.id === event.previousContainer.id) {
      // move inside same list
      moveItemInArray(this.gameBlocks, event.previousIndex, event.currentIndex);
    } else {
      // move between lists
    }
  }
}
