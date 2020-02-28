import React from 'react'

import { Paper } from '@material-ui/core'

import Header from './Components/Header'
import Balance from './Components/Balance'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'

import GlobalProvider from './Context/GlobalState'

import './style.scss'

export default function ExpenseTracker() {
  return (
    <GlobalProvider>
      <div className="page-container">
        <Header />
        <Paper elevation={0} className="content">
          <Balance />
          <TransactionList />
          <AddTransaction />
        </Paper>
      </div>
    </GlobalProvider>
  )
}
