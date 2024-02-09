import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  postOrder(data: object): object {
    console.log('Order detail', data);

    return { message: 'Order has been placed', data };
  }
}
