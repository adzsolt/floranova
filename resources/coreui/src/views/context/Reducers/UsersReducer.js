
export default (state = [], action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'SET_ROLES':
            return {
                ...state,
                roles: action.payload
            }
        
        default:
            return state;
    }
}