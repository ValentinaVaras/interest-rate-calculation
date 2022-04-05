const express = require('express')
const PageController = require('./controllers/PageController')
const InterestRate = require('./controllers/InterestRate')

const router = express.Router()

// Controllers
const pageController = new PageController()
const interestRate = new InterestRate()

// Routes
router.get('/', interestRate.renderInterestRateForm)
router.post('/', interestRate.renderInterestRate)

router.get('*', pageController.renderNotFound)

module.exports = router
