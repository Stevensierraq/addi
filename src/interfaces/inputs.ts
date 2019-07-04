export interface ITarget {
  target: {
    value: string | number,
    name: string,
  }
}

export interface IInput {
  size?: string
  type?: string
  name?: string
  value: string
  errorClass?: boolean
  placeholder: string
  onChange: (value: ITarget) => void
  icon: 'email' | 'dni' | 'number' | 'date' | 'phone' | 'address' | 'user'
}
