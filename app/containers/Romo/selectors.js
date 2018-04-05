import { createSelector } from 'reselect';

/**
 * Direct selector to the romo state domain
 */
const selectRomoDomain = (state) => state.get('romo');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Romo
 */

const makeSelectRomo = () => createSelector(
  selectRomoDomain,
  (substate) => substate.toJS()
);

export default makeSelectRomo;
export {
  selectRomoDomain,
};
