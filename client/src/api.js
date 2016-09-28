import superagent from 'superagent'
import Q from 'q'
const baseUrl = '/api'

export function getStuff () {
  var deferred = Q.defer()
  superagent
    .get(`${baseUrl}/whatever`)
    .type('json')
    .end(function (err, res) {
      if (err) {
        deferred.reject(err)
      }
      deferred.resolve(res)
    })
  return deferred.promise
}
