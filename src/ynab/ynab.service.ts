import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as ynab from 'ynab'
import { YnabTransaction } from './types'

@Injectable()
export class YnabService {
  private YNAB_ACCESS_TOKEN: string
  private YNAB_BUDGET_ID: string
  private YNAB_ACCOUNT_ID: string
  private PASSWORD: string

  private ynabAPI: ynab.API

  constructor(private readonly configService: ConfigService) {
    this.YNAB_ACCESS_TOKEN = this.configService.get('YNAB_ACCESS_TOKEN')
    this.YNAB_BUDGET_ID = this.configService.get('YNAB_BUDGET_ID')
    this.YNAB_ACCOUNT_ID = this.configService.get('YNAB_ACCOUNT_ID')
    this.PASSWORD = this.configService.get('PASSWORD')

    this.ynabAPI = new ynab.API(this.YNAB_ACCESS_TOKEN)
  }

  public getBudgets = async (password: string) => {
    if (password !== this.PASSWORD) {
      throw new Error('Invalid password')
    }

    const budgetsResponse = await this.ynabAPI.budgets.getBudgets(true)
    return budgetsResponse.data.budgets
  }

  public createTransaction = async (transaction: YnabTransaction) => {
    const transactionsResponse =
      await this.ynabAPI.transactions.createTransaction(this.YNAB_BUDGET_ID, {
        transaction: {
          account_id: this.YNAB_ACCOUNT_ID,
          date: transaction.date,
          amount: transaction.amount,
          payee_name: transaction.payee_name,
          cleared: transaction.cleared,
          approved: transaction.approved,
        },
      })
    return transactionsResponse.data.transaction
  }
}
