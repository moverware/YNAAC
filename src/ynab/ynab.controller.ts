import { Controller, Get } from '@nestjs/common'
import { YnabService } from './ynab.service'

@Controller('ynab')
export class YnabController {
  constructor(private readonly ynabService: YnabService) {}

  @Get('/getBudgets')
  async getUser() {
    const budgets = await this.ynabService.getBudgets()
    return { budgets }
  }
}
