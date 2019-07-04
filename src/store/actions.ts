import { IPropspect } from './interfaces'

export const addPropspect = (propspect: IPropspect) => ({
  type: '@@PROPSPECTS/ADD_PROPSPECT',
  payload: {
    propspect,
  },
})

export const addClient = (client: IPropspect) => ({
  type: '@@CLIENTS/ADD_CLIENT',
  payload: {
    client,
  },
})
