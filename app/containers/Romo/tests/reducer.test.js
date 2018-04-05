
import { fromJS } from 'immutable';
import romoReducer from '../reducer';

describe('romoReducer', () => {
  it('returns the initial state', () => {
    expect(romoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
