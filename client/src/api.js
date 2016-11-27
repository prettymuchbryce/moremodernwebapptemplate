import superagent from 'superagent'
import Promise from 'bluebird'
const baseUrl = '/api'

export function getStuff () {
  return new Promise((resolve, reject) => {
    superagent
      .get(`${baseUrl}/whatever`)
      .type('json')
      .end(function (err, res) {
        if (err) {
          reject(err)
        }
        resolve(err)
      })
  })
}
