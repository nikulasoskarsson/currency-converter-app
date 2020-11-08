import { makeAutoObservable, runInAction } from 'mobx'
export function createCurrencyStore() {
  return makeAutoObservable({
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
      runInAction(
        () =>
          (this.exchangeRate = res.rates[this.selectedCurrencyTo] * this.amount)
      )
    },
    setFromFilters(string) {
      this.fromFilterString = string
      if (this.fromFilterString !== '') {
        this.fromFilteredCurrencies = this.currencies.filter((currency) =>
          currency.toLowerCase().includes(string.toLowerCase())
        )
      } else {
        this.fromFilteredCurrencies = []
      }
    },
    setToFilters(string) {
      this.toFilterString = string

      if (this.toFilterString !== '') {
        this.toFilteredCurrencies = this.currencies.filter((currency) =>
          currency.toLowerCase().includes(string.toLowerCase())
        )
      } else {
        this.toFilteredCurrencies = []
      }
    },
    clearFromFilters() {
      this.fromFilterString = ''
      this.fromFilteredCurrencies = []
    },
    clearToFilters() {
      this.toFilterString = ''
      this.toFilteredCurrencies = []
    },
    setAmount(amount) {
      this.amount = amount
    },
  })
}
