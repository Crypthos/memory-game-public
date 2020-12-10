import { Component, OnInit } from '@angular/core';
import {CardData} from "../game-card/cardData";
import {MatDialog} from "@angular/material/dialog";
import {ResetGameComponent} from "../reset-game/reset-game.component";
import {ActivatedRoute} from "@angular/router";
import {GameDataService} from "../../service/data/game-data.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  cardImages = [
    '66821761.jpeg',
    '225598580.jpeg',
    '282880805.jpeg',
    '299331381.jpeg',
    '313088237.jpeg',
    '376006721.jpeg'
  ];

  gameMessageFromService;
  cards: CardData[] = [];

  score: number = 0;

  interval;
  flippedCards: CardData[] = [];

  matchedCount = 0;
  gameStarted = false;

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }
  name = ''
  //ActivatedRouter
  constructor(private dialog: MatDialog,
              private route: ActivatedRoute,
              private service: GameDataService) {

  }

  ngOnInit(): void {
    this.setupCards();
    /*console.log(this.route.snapshot.params['name'])*/
    this.name = (this.route.snapshot.params['name']);
  }

  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };

      this.cards.push({...cardData});
      this.cards.push({...cardData});

    });

    this.cards = this.shuffleArray(this.cards);
  }

  cardClicked(index: number): void {

    const cardInfo = this.cards[index];


    this.startTimers()
    this.gameStarted = true;

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }
    }
    // else if (cardInfo.state === 'flipped') {
    //   cardInfo.state = 'default';
    //   this.flippedCards.pop();
    //
    // }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];


      if (nextState === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === this.cardImages.length) {
          this.pauseTimer()
          this.gameStarted = false
          const dialogRef = this.dialog.open(ResetGameComponent, {
            disableClose: true
          });

          dialogRef.afterClosed().subscribe(() => {
            this.restart();
            this.score = 0;
          });
        }
      }

    }, 1000);
  }

  startTimers(): void {
    if (this.gameStarted == false) {
      console.log("=====>");
      this.interval = setInterval(() => {
        if (this.score === 0) {
          this.score++;
        } else {
          this.score++;
        }
      }, 100);

    }
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  getMessage() {
    //console.log(this.service.executeHelloGamerBeanService());
    this.service.executeHelloGamerBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('last line of getMessage')
    //console.log("Get message")
  }

  getMessageWithParameter() {
    //console.log(this.service.executeHelloGamerBeanService());
    this.service.executeHelloGamerServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('last line of getMessage')
    //console.log("Get message")
  }

  handleSuccessfulResponse(response){
    this.gameMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error){
    this.gameMessageFromService = error.error.message
  }
  //
  // transform(value: number, args?: any): number {
  //   return value;
  // }
}

