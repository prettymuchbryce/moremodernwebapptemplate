import superagent from 'superagent';
import superagentPromisePlugin from 'superagent-promise-plugin';
import Q from 'q';
import Cookie from 'js-cookie';
const baseUrl = '/api';

export function getStuff() {
    var deferred = Q.defer();
    superagent
        .post('/api/pet')
        .send({ name: 'Manny', species: 'cat' })
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .end(function(err, res) {
            if (err) {
                deferred.reject(err);
            }
            deferred.resolve(res);
        });
    return deferred.promise;
}
