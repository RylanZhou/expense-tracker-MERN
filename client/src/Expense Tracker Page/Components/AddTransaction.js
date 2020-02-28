import React, { useState, useContext } from 'react'

import { TextField, Button } from '@material-ui/core'

import { GlobalContext } from '../Context/GlobalState'

export default function AddTransaction() {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')

  const { addTransaction } = useContext(GlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    addTransaction({
      id: `${+new Date()}`,
      text: desc,
      amount: +amount
    })

    setDesc('')
    setAmount('')
  }

  return (
    <div className="add-transaction">
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          className="widget"
          size="small"
          variant="outlined"
          label="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <TextField
          className="widget"
          size="small"
          variant="outlined"
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button
          className="widget"
          color="primary"
          variant="contained"
          type="submit"
        >
          Add Transaction
        </Button>
      </form>
    </div>
  )
}
