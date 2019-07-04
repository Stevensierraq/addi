export interface IPropspect {
  id?: string
  name: string
  email: string
  phone: string
  address: string
  dniType: string
  dniExpiry: string
  dniNumber: string | number
}

export interface IAction {
  type: string
  payload: {
    propspect: {},
    client: {},
    key: string,
    value: string | number,
    id: string,
  },
}

export interface IReducer {
  propspects: IPropspect[],
  clients: IPropspect[],
}
