// import type { AppService } from './app.service';
import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @EventPattern('hello')
  hello(data: any): string {
    console.log(data);
    return `Hello ${data?.ping}`;
  }
}
