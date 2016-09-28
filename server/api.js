module.exports = function (app) {
  app.get('/api/whatever', function (req, res) {
    res.send({foo: 'bar'})
  })
}
