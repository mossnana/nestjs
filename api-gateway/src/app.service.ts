import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class AppService {
  constructor(@Inject('USER') private userClient: ClientProxy) {}

  async hello(): Promise<any> {
    return this.userClient.send('hello', {
      ping: 'pong',
    })
  }
}
