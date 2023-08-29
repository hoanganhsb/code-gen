import { Controller, Get } from '@nestjs/common';

import { sRRControllerGetSRRs } from '../__generated__/startrail-api';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/data')
  getData() {
    return this.appService.getData();
  }

  @Get('/get-test-srr')
  async getSRR() {
    return sRRControllerGetSRRs({
      tokenId: '7669849',
    });
  }
}
