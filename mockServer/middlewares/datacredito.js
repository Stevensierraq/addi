const datacredito = require('../modules/datacredito')

module.exports = (req, res, next) => {
  if (req.url === '/datacredito' && req.method === 'POST') {
    const { body } = req
    const propspectExist = datacredito.filter(person => person.dni === body.dniNumber).shift()
    setTimeout(() => {
      if (propspectExist) {
        res.json({
          "exist": true,
          "dni": propspectExist.dni
        })
      } else {
        res.json({
          "exist": false,
          "dni": body.dniNumber
        })
      }
      next()
    }, 2000)
  } else {
    next()
  }

}
