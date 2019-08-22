export const navReducer = (state = '', action) => {
	switch (action.type) {
		case 'UPDATE_NAV':
			return action.name;
		default:
			return state;
	}
};
