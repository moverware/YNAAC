import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { YnaacService } from './ynaac.service'
import { YnaacTransaction } from './types'

@Controller('ynaac')
export class YnaacController {
  constructor(private readonly ynaacService: YnaacService) {}

  @Post('/processTransaction')
  @HttpCode(HttpStatus.CREATED)
  async processTransaction(@Body() transaction: YnaacTransaction) {
    try {
      await this.ynaacService.processTransaction(transaction)
      return { success: true }
    } catch (e) {
      console.error(e)
      return { success: false, error: e }
    }
  }
}
