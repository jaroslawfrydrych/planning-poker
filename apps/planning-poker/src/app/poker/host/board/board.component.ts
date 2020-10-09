import { Component, OnInit } from '@angular/core';
import { ButtonColor } from '@shared/button/button-color.enum';
import { GameState } from '@shared/enum/game-state.enum';
import { UserStatus } from '@shared/enum/user-status.enum';
import { User } from '@shared/model/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HostService } from '../host.service';

@Component({
  selector: 'planning-poker-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public users$: Observable<User[]>;
  public userStatues = UserStatus;
  public gameState$: Observable<GameState>;
  public gameStates = GameState;
  public buttonColors = ButtonColor;
  public reviewCardsSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public currentTime$: Observable<Date>;

  constructor(private hostService: HostService) {
  }

  ngOnInit(): void {
    this.users$ = this.hostService.getUsers();
    this.currentTime$ = this.hostService.currentTime();
    this.gameState$ = this.hostService.gameState$
      .pipe(
        tap((gameState: GameState) => this.handleGameStateChange(gameState))
      );
  }

  public toggleGameState(): void {
    this.hostService.toggleGameState();
  }

  private handleGameStateChange(gameState: GameState): void {
    this.reviewCardsSubject$.next(gameState === GameState.REVIEW);
  }
}
