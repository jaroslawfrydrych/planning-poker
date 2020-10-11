import { GameStates } from '@planning-poker/api-interfaces';
import { BehaviorSubject } from 'rxjs';

export class Room {

  public id: string;
  private stateSubject$: BehaviorSubject<GameStates> = new BehaviorSubject<GameStates>(GameStates.IN_PROGRESS);

  constructor() {
    this.id = this.generateId();
    console.log('create room', this.id);
  }

  public get state(): GameStates {
    return this.stateSubject$.getValue();
  }

  public set state(roomState: GameStates) {
    this.stateSubject$.next(roomState);
  }

  public regenerateId(): void {
    this.id = this.generateId();
  }

  private generateId(): string {
    const calculation: number = Math.floor(Math.random()*90000) + 10000;
    return calculation.toString();
  }
}
