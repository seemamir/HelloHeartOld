
import { fromJS } from 'immutable';
import infoReducer from '../reducer';

describe('infoReducer', () => {
  it('returns the initial state', () => {
    expect(infoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
