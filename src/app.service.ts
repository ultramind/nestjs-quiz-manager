import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  saySomething():string {
    return 'This page will return something...';
  }
}
