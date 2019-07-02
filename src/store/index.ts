import { combineReducers, createStore } from 'redux'

import { IAction, IPropspect, IReducer } from './interfaces'

function clientReducer(state = {}, action: IAction): IPropspect | {} {
  switch (action.type) {
    case '@@ORDER/SET_ORDER': {
      return state
    }
    default: return state
  }
}

function propspectReducer(state = [], action: IAction): IPropspect[] | {} {
  switch (action.type) {
    case '@@PROPSPECTS/ADD_PROPSPECT': {
      return [
        ...state,
        action.payload.propspect,
      ]
    }
    default: return state
  }
}

const store = createStore(
  combineReducers<IReducer | any>({
    propspects: propspectReducer,
    clients: clientReducer,
  }),
)

export default store
