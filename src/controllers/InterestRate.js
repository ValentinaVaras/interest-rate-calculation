class InterestRate {
  // codigo basura
  constructor () {
    this.renderInterestRate = this.renderInterestRate.bind(this)
  }

  calculateTotalInterest (capital, interest, year) {
    const totalInterest = capital * (interest / 100) * year
    return totalInterest
  }

  renderInterestRateForm (req, res) {
    res.render('interest-rate-form')
  }

  renderInterestRate (req, res) {
    const capital = parseFloat(req.body.capital)
    const interest = parseFloat(req.body.interest)
    const years = parseFloat(req.body.years)

    res.render('interest-rate', {
      capital,
      interest,
      years,
      totalInterest: this.calculateTotalInterest(capital, interest, years)
    })
  }
}

module.exports = InterestRate
