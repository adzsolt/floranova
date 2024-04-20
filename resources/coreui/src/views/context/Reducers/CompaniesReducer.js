
export default (state = [], action) => {
    switch (action.type) {
        case 'SET_COMPANIES':
            return {
                ...state,
                companies: action.payload
            }
        
        default:
            return state;
    }
}