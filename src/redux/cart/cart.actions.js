import * as ActionTypes from './cart.constants';

export const toggleCartHidden = () => ({
	type: ActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
	type: ActionTypes.ADD_ITEM,
	payload: item
});
