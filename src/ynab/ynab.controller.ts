import { Controller, Get, Query } from '@nestjs/common'
import { YnabService } from './ynab.service'

@Controller('ynab')
export class YnabController {
  constructor(private readonly ynabService: YnabService) {}

  @Get('/getBudgets')
  async getUser(@Query() query: { password: string }) {
    try {
      const budgets = await this.ynabService.getBudgets(query.password)
      return { budgets }
    } catch (e) {
      console.error(e)
      return { error: e.message }
    }
  }
}
