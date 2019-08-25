export const navReducer = (state = localStorage.getItem('nav') || 'Home', action) => {
	switch (action.type) {
		case 'UPDATE_NAV':
			return action.name;
		default:
			return state;
	}
};
