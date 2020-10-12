import { Body, Controller, Post } from '@nestjs/common';
import {
  ClientType,
  CreateRoomDto,
  JoinRoomCodeRequestDto,
  JoinRoomCodeResponseDto,
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

    room.addClientToRoom({
      id: request.clientId,
      type: ClientType.HOST
    });

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

  @Post('room-info')
  public roomInfo(@Body() request: JoinRoomCodeRequestDto): RoomInfoInterface {
    const room: Room = this.pokerService.getRoomById(request.id);

    return {
      id: room.id,
      state: room.state
    }
  }
}
