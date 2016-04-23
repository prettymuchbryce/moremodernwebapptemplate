import * as ActionTypes from '../actions/action-types';
import _ from 'lodash';

let defaultState = {
    main: {}
};

export default function(state = defaultState, action) {
    let cloned;
    switch(action.type) {
        case ActionTypes.TEST_ACTION:
            cloned = _.clone(state);
            return _.merge(cloned, action.payload);
        default:
            return state;
    }
}
