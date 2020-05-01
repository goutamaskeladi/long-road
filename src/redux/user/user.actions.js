import * as ActionTypes from './user.constants';

export const setCurrentUser = (user) => ({
	type: ActionTypes.SET_CURRENT_USER,
	payload: user
});
