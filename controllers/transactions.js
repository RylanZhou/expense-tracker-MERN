/* Interactions with the database */
const Transaction = require('../models/Transaction')

/**
 * @description Get all transactions
 * @route       GET /api/v1/transactions
 * @access      Public
 */
exports.getTransactions = async (request, response, next) => {
  try {
    const transactions = await Transaction.find()
    return response.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

/**
 * @description Post a new transaction
 * @route       POST /api/v1/transactions
 * @access      Public
 */
exports.addTransactions = async (request, response, next) => {
  try {
    const transaction = await Transaction.create(request.body)
    return response.status(201).json({
      success: true,
      data: transaction
    })
  } catch (error) {
    // Validation Error from mongoose model
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((value) => value.message)
      // 400: Bad Request
      return response.status(400).json({
        success: false,
        error: messages
      })
    }
    return response.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

/**
 * @description Delete a transactions
 * @route       DELETE /api/v1/transactions/:id
 * @access      Public
 */
exports.deleteTransactions = async (request, response, next) => {
  try {
    const transaction = await Transaction.findById(request.params.id)

    if (!transaction) {
      return response.status(404).json({
        success: false,
        error: 'No transaction found.'
      })
    }

    // ! Pay attention: remove() is called upon the resource, not the model.
    await transaction.remove()

    return response.status(200).json({
      success: true,
      data: {}
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}
