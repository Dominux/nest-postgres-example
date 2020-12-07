import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  public supDude(): string {
    return 'Sup, dude!'
  }
}
