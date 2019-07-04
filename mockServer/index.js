const antecedentes = require('./modules/antecedentes')
const datacredito = require('./modules/datacredito')

module.exports = () => {
  return {
    antecedentes,
    datacredito
  }
}
