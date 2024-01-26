import { Injectable } from '@nestjs/common'
import { YnabService } from 'src/ynab/ynab.service'
import { YnaacTransaction } from './types'

@Injectable()
export class YnaacService {
  constructor(private readonly ynabService: YnabService) {}

  public processTransaction = async (transaction: YnaacTransaction) => {
    return await this.ynabService.createTransaction({
      ...transaction,
      amount: transaction.amount * 1000,
      cleared: 'cleared',
      approved: false,
    })
  }
}
