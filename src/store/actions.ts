import { IPropspect } from './interfaces'

export const addPropspect = (propspect: IPropspect) => ({
  type: '@@PROPSPECTS/ADD_PROPSPECT',
  payload: {
    propspect,
  },
})
