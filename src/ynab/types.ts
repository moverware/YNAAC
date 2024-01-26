import { TransactionClearedStatus } from 'ynab'

export interface YnabTransaction {
  // ISO format (e.g. 2016-12-01)
  date: string
  // milliunits format
  amount: number
  payee_name: string
  cleared: TransactionClearedStatus
  approved: boolean
}
