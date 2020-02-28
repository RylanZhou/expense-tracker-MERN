import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import reducer from './reducer'

const initialState = {
  transactions: [],
  error: null,
  loading: true
}

export const GlobalContext = createContext(initialState)

export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Actions
  const getTransaction = async () => {
    try {
      const { data } = await axios.get('/api/v1/transactions')
      dispatch({
        type: 'GET_TRANSACTION',
        payload: data.data
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data
      })
    }
  }

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`)
      dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data
      })
    }
  }

  const addTransaction = async (transaction) => {
    try {
      const { data } = await axios.post('/api/v1/transactions', transaction, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: data.data
      })
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data
      })
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        getTransaction,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.node
}
