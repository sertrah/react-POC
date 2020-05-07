import { createSelector } from 'reselect'

const getUserFromState = state => state.user;

export const getUser = createSelector(
  [getUserFromState],
  (user) => {
    return user.data?.results[0];
  }
)