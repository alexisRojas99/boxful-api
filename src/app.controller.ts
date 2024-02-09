import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1/orders')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  postOrder(@Body() data: object): object {
    return this.appService.postOrder(data);
  }
}
