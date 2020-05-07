import { createSelector } from 'reselect'

const getSummaryCasesFromState = state => state.countries;
/* const getCharacterFromState = state => state.character;
 */
export const getSummaryCasesList = createSelector(
  [getSummaryCasesFromState],
  (countries) => {
    return countries.data;
  }
)

export const getGlobalCases = createSelector(
  [getSummaryCasesFromState],
  (countries) => {
    return countries;
  }
)

