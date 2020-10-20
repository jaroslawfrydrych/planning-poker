import { Body, Controller, Get, Post } from '@nestjs/common';

import {
  CreateRoomDto,
  JoinRoomCodeRequestDto,
  JoinRoomCodeResponseDto,
  PlayerType,
  RoomInfo
} from '@planning-poker/api-interfaces';

import { PokerService } from './poker.service';
import { Room } from './room';

@Controller()
export class PokerController {

  constructor(private readonly pokerService: PokerService) {
  }

  @Post('create-room')
  public createRoom(@Body() request: CreateRoomDto): RoomInfo {
    // todo create secure http only cookie here with client id

    const room: Room = this.pokerService.createRoom();

    room.addPlayer({
      id: request.clientId,
      type: PlayerType.HOST
    });

    return {
      id: room.id,
      gameState: room.state
    };
  }

  @Post('join-room-code')
  public joinRoomCode(@Body() request: JoinRoomCodeRequestDto): JoinRoomCodeResponseDto {
    return {
      valid: this.pokerService.checkIsRoomExists(request.id)
    };
  }

  @Post('room-info')
  public roomInfo(@Body() request: JoinRoomCodeRequestDto): RoomInfo {
    const room: Room = this.pokerService.getRoom(request.id);

    return {
      id: room.id,
      gameState: room.state
    };
  }

  @Get('room-votes')
  public roomVotes() {
    // todo get room client votes
  }
}
