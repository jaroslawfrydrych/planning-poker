import { Body, Controller, Post } from '@nestjs/common';
import {
  CreateRoomDto,
  JoinRoomCodeRequestDto, JoinRoomCodeResponseDto, JoinRoomNameRequestDto,
  RoomInfoInterface
} from '@planning-poker/api-interfaces';
import { PokerService } from './poker.service';
import { Room } from './room';

@Controller()
export class PokerController {

  constructor(private readonly pokerService: PokerService) {
  }

  @Post('create-room')
  public createRoom(@Body() request: CreateRoomDto): RoomInfoInterface {
    const room: Room = this.pokerService.createRoom();
    this.pokerService.setClientAsHost(request.clientId);
    this.pokerService.assignClientToRoom(request.clientId, room.id);

    return {
      id: room.id,
      state: room.state
    };
  }

  @Post('join-room-code')
  public joinRoomCode(@Body() request: JoinRoomCodeRequestDto): JoinRoomCodeResponseDto {
    return {
      valid: this.pokerService.checkIsRoomExists(request.id)
    };
  }
}
