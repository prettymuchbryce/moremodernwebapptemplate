import * as ActionTypes from '../actions/action-types';
import _ from 'lodash';

let initialState = {
    "foo": true
};

export default function(state = initialState, action) {
    let cloned;
    switch(action.type) {
        case ActionTypes.TEST_ACTION:
            cloned = _.clone(state);
            return _.merge(cloned, action.payload);
        default:
            return state;
    }
}
