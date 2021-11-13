import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import {
  AppInfoDtoInterface,
  CreateRoomDto,
  JoinRoomCodeRequestDto,
  JoinRoomCodeResponseDto,
  PlayerType,
  RoomInfo
} from '@planning-poker/api-interfaces';

import { version } from '../../../../../package.json';
import { PokerService } from './poker.service';
import { Room } from './room';

@Controller()
export class PokerController {

  constructor(private readonly pokerService: PokerService) {
  }

  @Post('create-room')
  public createRoom(@Res() response: Response, @Body() request: CreateRoomDto): void {
    // todo create secure http only cookie here with client id

    if (!request || !request.clientId) {
      throw new HttpException('No client id is provided', HttpStatus.BAD_REQUEST);
    }

    const room: Room = this.pokerService.createRoom();

    room.addPlayer({
      id: request.clientId,
      type: PlayerType.HOST
    });

    const token: string = this.pokerService.createUserToken(request.clientId, room.id);
    this.pokerService.setJwtCookie(token, response);

    response.send({
      id: room.id,
      gameState: room.state
    });
  }

  @Post('join-room-code')
  public joinRoomCode(@Body() request: JoinRoomCodeRequestDto): JoinRoomCodeResponseDto {
    return {
      valid: this.pokerService.checkIsRoomExists(request.id)
    };
  }

  @Post('room-info')
  public roomInfo(@Body() request: JoinRoomCodeRequestDto): RoomInfo {
    return this.pokerService.getRoomInfo(request.id);
  }

  @Get('check-player-in-room')
  public checkPlayerInRoom(@Req() request: Request): boolean {
    const token: string = this.pokerService.getJwtCookie(request);
    const decodedToken = this.pokerService.decodeJwt(token);

    const room: Room | null = this.pokerService.findPlayerRoom(decodedToken.playerId);
    return room ? room.id === decodedToken.roomNumber : false;
  }

  @Get('check-host-of-room')
  public checkHostOfRoom(@Req() request: Request): boolean {
    const token: string = this.pokerService.getJwtCookie(request);
    const decodedToken = this.pokerService.decodeJwt(token);

    const room: Room | null = this.pokerService.getRoom(decodedToken.roomNumber);
    return room ? room.host.id === decodedToken.playerId : false;
  }

  @Get('app-info')
  public getAppInfo(): AppInfoDtoInterface {
    return {
      info: 'version ' + version
    };
  }
}
