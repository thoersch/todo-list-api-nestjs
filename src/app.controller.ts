import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  appRoot(): string {
    return "App Root"
  }
}
