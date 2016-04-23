import * as ActionTypes from './action-types';

export function testAction(text) {
    return { type: ActionTypes.TEST_ACTION, payload: {} };
}
