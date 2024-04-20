
export default (state = [], action) => {
    switch (action.type) {
        case 'SET_VIDEOSTIKTOKIDS':
            return {
                ...state,
                tiktokids: action.payload
            }
        case 'SET_VIDEOSCOUNTRYNAME':
            return {
                ...state,
                countryName: action.payload
            }
        case 'SET_VIDEOSSTARTDATE':
            return {
                ...state,
                startDate: action.payload
            }
        case 'SET_VIDEOSENDDATE':
            return {
                ...state,
                endDate: action.payload
            }
        
        default:
            return state;
    }
}