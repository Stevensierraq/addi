
const antecedentes = require('../modules/antecedentes')

module.exports = (req, res, next) => {
  if (req.url === '/antecedentes' && req.method === 'POST') {
    const { body } = req
    console.log(body)
    const propspectExist = antecedentes.filter(person => person.dni === body.dniNumber).shift()
    setTimeout(() => {
      if (propspectExist) {
        res.json(propspectExist)
      } else {
        res.json({
          "reported": false,
          "dni": body.dniNumber
        })
      }
      next()
    }, 2000)
  } else {
    next()
  }
}
