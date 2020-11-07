export function createCurrencyStore() {
  return {
    currencies: [
      'AED',
      'ARS',
      'AUD',
      'BGN',
      'BRL',
      'BSD',
      'CAD',
      'CHF',
      'CLP',
      'CNY',
      'COP',
      'CZK',
      'DKK',
      'DOP',
      'EGP',
      'EUR',
      'FJD',
      'GBP',
      'GTQ',
      'HKD',
      'HRK',
      'HUF',
      'IDR',
      'ILS',
      'INR',
      'ISK',
      'JPY',
      'KRW',
      'KZT',
      'MXN',
      'MYR',
      'NOK',
      'NZD',
      'PAB',
      'PEN',
      'PHP',
      'PKR',
      'PLN',
      'PYG',
      'RON',
      'RUB',
      'SAR',
      'SEK',
      'SDG',
      'THB',
      'TRY',
      'TWD',
      'UAH',
      'USD',
      'UYU',
      'VND',
      'ZAR',
    ],
    selectedCurrencyFrom: 'USD',
    selectedCurrencyTo: 'EUR',
    loading: false,
    error: null,
    exchangeRate: null,
    amount: 1,
    fromFilterString: '',
    fromFilteredCurrencies: [],
    toFilterString: '',
    toFilteredCurrencies: [],

    setSelectedCurrencyFrom(currency) {
      this.selectedCurrencyFrom = currency
    },

    setSelectedCurrencyTo(currency) {
      this.selectedCurrencyTo = currency
    },

    async getExchangeRate() {
      const conn = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${this.selectedCurrencyFrom}`
      )
      const res = await conn.json()
      console.log(res)
      this.exchangeRate = res.rates[this.selectedCurrencyTo]
    },
  }
}
