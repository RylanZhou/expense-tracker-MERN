import React, { useContext } from 'react'

import { Paper } from '@material-ui/core'

import { GlobalContext } from '../Context/GlobalState'

export default function Balance() {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map((each) => each.amount)
  const balance = amounts.reduce((acc, current) => acc + current, 0).toFixed(2)

  const income = amounts
    .filter((each) => each > 0)
    .reduce((acc, current) => acc + current, 0)
    .toFixed(2)

  const expense = Math.abs(
    amounts
      .filter((each) => each < 0)
      .reduce((acc, current) => acc + current, 0)
  ).toFixed(2)

  return (
    <div className="balance">
      <h3>Your balance</h3>
      <h2>${balance}</h2>
      <Paper className="income-expense">
        <div className="half">
          <h4>Income</h4>
          <h4 className="income">${income}</h4>
        </div>
        <div className="half">
          <h4>Expense</h4>
          <h4 className="expense">${expense}</h4>
        </div>
      </Paper>
    </div>
  )
}
