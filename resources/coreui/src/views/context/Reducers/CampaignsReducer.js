
export default (state = [], action) => {
    switch (action.type) {
        case 'SET_CAMPAIGNS':
            return {
                ...state,
                campaigns: action.payload
            }
        case 'SET_DOMAINS':
            return {
                ...state,
                domains: action.payload
            }
        case 'SET_KEYWORDS':
            return {
                ...state,
                keywords: action.payload
            }
        case 'SET_PLATFORMS':
            return {
                ...state,
                platforms: action.payload
            }
        case 'SET_TRAFFICSOURCES':
            return {
                ...state,
                trafficSources: action.payload
            }
        case 'SET_TRACKINGDOMAINS':
            return {
                ...state,
                trackingDomains: action.payload
            }
        case 'SET_TRACKINGROUTES':
            return {
                ...state,
                trackingRoutes: action.payload
            }
        case 'SET_SEDOACCOUNTS':
            return {
                ...state,
                sedoAccounts: action.payload
            }
        
        default:
            return state;
    }
}