// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case "ADD_RECIPES_TO_FAVOURITES":
            return {
                ...state,
                favourites: [action.payload, ...state.favourites],
            };
        case "REMOVE_RECIPES_FROM_FAVOURITES":
            return {
                ...state,
                favourites: state.favourites.filter(recipe => recipe.id !== action.payload)
            };
        case "OPEN_CLOSE_MENU":
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case "GO_PAGE":
            return {
                ...state,
                isOpen: false
            }
        default:
            return {
                state
            };
    } 
};