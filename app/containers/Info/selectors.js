import { createSelector } from 'reselect';

/**
 * Direct selector to the info state domain
 */
const selectInfoDomain = (state) => state.get('info');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Info
 */

const makeSelectInfo = () => createSelector(
  selectInfoDomain,
  (substate) => substate.toJS()
);

export default makeSelectInfo;
export {
  selectInfoDomain,
};
