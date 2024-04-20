import {createContext, useReducer} from 'react';
import globalReducer from './Reducers/index';

// initial state
const initialState = {
  users: {
    roles: [],
    users: [],
    user: null
  },
  seasons: [],


}
// context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  //actions
  const setUser = (data) => {
    dispatch({
      type: 'SET_USER',
      payload: data
    })
  }
  const setUsers = (data) => {
    dispatch({
      type: 'SET_USERS',
      payload: data
    })
  }
  const setRoles = (data) => {
    dispatch({
      type: 'SET_ROLES',
      payload: data
    })
  }
  const setSeasons = (data) => {
    dispatch({
      type: 'SET_SEASONS',
      payload: data
    })
  }


  return (
    <GlobalContext.Provider value={{
      user: state.users.user,
      users: state.users.users,
      roles: state.users.roles,
      seasons: state.seasons,
      setUser,
      setUsers,
      setRoles,
      setSeasons,

    }}>
      {children}
    </GlobalContext.Provider>
  );
}
