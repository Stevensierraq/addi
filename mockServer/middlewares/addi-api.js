module.exports = (req, res, next) => {
  if (req.url === '/addi-api' && req.method === 'GET') {
    const score = Math.floor(Math.random() * (100 - 50)) + 50

    res.json({
      "score": score,
    })
    
  }
  next()
}
