import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Paper } from '@material-ui/core'
import { FaTimes } from 'react-icons/fa'

import { GlobalContext } from '../Context/GlobalState'

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount >= 0 ? '+' : '-'

  return (
    <Paper className="item">
      <div className="desc">{transaction.text}</div>
      <div>{`${sign}$${Math.abs(transaction.amount)}`}</div>
      <div
        className="indicator"
        style={{
          backgroundColor: transaction.amount >= 0 ? '#27ae60' : '#c0392b'
        }}
      />

      <button onClick={() => deleteTransaction(transaction._id)}>
        <FaTimes />
      </button>
    </Paper>
  )
}

Transaction.propTypes = {
  transaction: PropTypes.object
}
