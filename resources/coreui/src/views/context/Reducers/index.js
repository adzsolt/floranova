import { combineReducers } from 'redux'
import UsersReducer from './UsersReducer'
import SeasonsReducer from './SeasonsReducer'


export default combineReducers({
    users: UsersReducer,
    seasons: SeasonsReducer,

})
