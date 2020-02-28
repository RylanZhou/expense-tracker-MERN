const express = require('express')
const {
  getTransactions,
  addTransactions,
  deleteTransactions
} = require('../controllers/transactions')

const router = express.Router()

/* Handle all api calls under /api/v1/transactions */
router
  .route('/')
  .get(getTransactions)
  .post(addTransactions)

router.route('/:id').delete(deleteTransactions)

module.exports = router
