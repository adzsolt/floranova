
export default (state = [], action) => {
    switch (action.type) {
        case 'SET_SEASONS':
            return {
                ...state,
                seasons: action.payload
            }

        default:
            return state;
    }
}
