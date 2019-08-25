export const navReducer = (state = 'Home', action) => {
	switch (action.type) {
		case 'UPDATE_NAV':
			return action.name;
		default:
			return state;
	}
};
