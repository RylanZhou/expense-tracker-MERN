import React, { useContext, useEffect } from 'react'

import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'

export default function TransactionList() {
  const { transactions, getTransaction } = useContext(GlobalContext)

  useEffect(() => {
    getTransaction()
  }, []) // The second parameter is to set the variables to watch

  return (
    <div className="transaction-list">
      <h3>History</h3>
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} key={transaction._id} />
      ))}
    </div>
  )
}
